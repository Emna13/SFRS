const isAdmin = (req, res, next) => {
  if (req.user.role == "admin") next();
  else res.send({ msg: "You are ot the Admin" });
};

module.exports = isAdmin;
