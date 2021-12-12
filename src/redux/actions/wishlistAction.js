import { ADD_WISHLIST, REMOVE_WISHLIST } from '../constants/constants';

export const addtoWishlist = (item) => ({
  type: ADD_WISHLIST,
  payload: item,
});

export const removefromWishlist = (id) => ({
  type: REMOVE_WISHLIST,
  payload: id,
});
