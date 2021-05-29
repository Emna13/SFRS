import {

    ADD_ORDER,
  } from "../const/actionsTypes";
  
  const initialState = {
    loading: true,
    orders:[]
  };
  const OrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
        case ADD_ORDER:
          return {
            ...state,
            loading: false,
            orders: payload,
          };
  
      default:
        return state;
    }
  };
  export default OrderReducer;