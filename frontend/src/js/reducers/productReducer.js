import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../const/actionsTypes";

const initialState = {
  loading: true,
  products: [],
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    default:
      return state;
  }
};
export default productReducer;
