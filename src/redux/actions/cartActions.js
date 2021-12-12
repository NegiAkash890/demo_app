import { ADD_CART, REMOVE_CART } from '../constants/constants';

export const addtoCart = (id) => ({
  type: ADD_CART,
  payload: id,
});

export const removefromCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});
