const express = require("express");
const { register, login } = require("../controllers/user.controller");
const {
  validator,
  registerRules,
  loginRules,
} = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");
const { getMyOrders, addOrder } = require("../controllers/order.controllers");
const { see } = require("../controllers/product.controller");

const Router = express.Router();

Router.post("/signup", registerRules(), validator, register);
Router.post("/login", loginRules(), validator, login);
Router.get("/current", isAuth(), (req, res) => res.json(req.user));
Router.get("/products",isAuth(), see);
Router.get("/myorders", isAuth(), getMyOrders);
Router.post('/addorder',isAuth(),addOrder)

module.exports = Router;
