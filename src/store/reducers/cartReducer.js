import {
  CART_SET_CART,
  CART_SET_PAYMENT,
  CART_SET_ADDRESS,
} from "../actionTypes";

const initialState = {
  cart: [],
  payment: {}, 
  address: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_SET_CART:
      return { ...state, cart: action.payload };
    case CART_SET_PAYMENT:
      return { ...state, payment: action.payload };
    case CART_SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
}
