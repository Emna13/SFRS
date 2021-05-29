import axios from "axios";
import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../const/actionsTypes";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  try {
    const addRes = await axios.post("/user/signup", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("/user/login", cred);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/user/current", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProduct = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT,
  });
  try {
    const products = await axios.get("/user/products");
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: products.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const addOrder=(newOrder)=>async(dispatch)=>{
 try {
  const addOrd = await axios.post("/user/addorder", newOrder);
  dispatch({
    type: REGISTER_SUCCESS,
    payload: addOrd.data,
  });
 } catch (error) {
   console.error(error)
 }
}