const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secretOrKey = config.get("secretOrKey");

exports.register = async (req, res) => {
  const { name, role, address, phone, email, password } = req.body;
  try {
    const isFound = await User.findOne({ email });
    if (isFound) return res.status(401).json({ errors:[{msg: "User already found !"}] });
    const newUser = new User({ name, role, address, phone, email, password });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors:[ error, {msg:"Unable to register"}] });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({errors: [{msg: "wrong credentials"}]  });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ errors: [{msg: "wrong credentials"}]  });
    const payload = {
      id: user._id,
      name: user.name,
      role: user.role,
      address: user.address,
      phone: user.phone,
      email: user.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` , user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors:[ error, {msg:"Unable to login"}]});
  }
};
