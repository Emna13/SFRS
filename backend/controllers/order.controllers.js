const Order = require("../models/Order");

exports.addOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;
  try {
    const newOrder = new Order({
      orderedBy: req.user,
      orderItems,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
  }
};

exports.getMyOrders = async (req, res) => {
    const id=req.params._id
  try {
    const orders = await Order.find(id).populate("orderItems","Product");
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
  }
};

exports.allOrders=async(req,res)=>{
    try {
        const orders = await Order.find().populate("orderItems","Product");
    res.send(orders);
    } catch (error) {
        console.error(error);
    res.status(500).json({ errors: error.message });
    }
}
