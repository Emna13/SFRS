const express = require("express");
const { allOrders } = require("../controllers/order.controllers");

const {
  add,
  edit,
  deleteProd,
  see,
} = require("../controllers/product.controller");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/passport-setup");
const { addRules, validator } = require("../middlewares/validator");
const Router = express.Router();

Router.post("/add",isAuth(),isAdmin, addRules(), validator, add);
Router.put("/edit/:id",isAuth(),isAdmin, edit);
Router.delete("/delete/:id",isAuth(),isAdmin, deleteProd);
Router.get('/orders',isAuth(),isAdmin,allOrders)

module.exports = Router;
