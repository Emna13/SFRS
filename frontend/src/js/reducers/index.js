import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import OrderReducer from './OrderReducer'

export default combineReducers({
  userReducer,
  productReducer,
  OrderReducer,
});
