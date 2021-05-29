const Product = require("../models/Product");

exports.add = async (req, res) => {
  try {
    const newProd = new Product({ ...req.body });
    await newProd.save();
    res.status(201).send(newProd);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ errors: [error, { msg: "Unable to add a new product" }] });
  }
};

exports.edit = async (req, res) => {
  const prodId = req.params.id;
  try {
    const product = await Product.updateOne(
      { _id: prodId },
      { $set: { ...req.body } }
    );
    if(product.nModified ==0) return res.status(201).send({msg:"No changes to be saved"})
    res.status(201).send({msg:"The product is succefully modified"});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ errors: [error, { msg: "Unable to edit the product" }] });
  }
};

exports.deleteProd = async (req, res) => {
  const prodId = req.params.id;
  try {
    const productD = await Product.deleteOne({_id:prodId});
    res.status(201).json({ msg: "product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.see = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
