import { ADD_CART, REMOVE_CART } from '../constants/constants';

const intialState = {
  cart: [],
};

export default function cartReducer(state = intialState, { type, payload }) {
  switch (type) {
    case ADD_CART:
      return { cart: [...state.cart, payload] };
    case REMOVE_CART:
      const shirtId = payload;
      const newCart = state.cart.filter((item) => {
        return shirtId != item.ShirtId;
      });
      return { cart: [...newCart] };
    default:
      return state;
  }
}
