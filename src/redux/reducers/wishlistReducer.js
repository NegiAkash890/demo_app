import { ADD_WISHLIST, REMOVE_WISHLIST } from '../constants/constants';

const intialState = {
  wishlist: [],
};

export default function wishlistReducer(
  state = intialState,
  { type, payload }
) {
  switch (type) {
    case ADD_WISHLIST:
      return { wishlist: [ ...state.wishlist, payload] };
    case REMOVE_WISHLIST:
      const shirtId = payload;
      const newWishList = state.wishlist.filter((item) => {
        return shirtId != item.ShirtId;
      });
      return { wishlist: [...newWishList] };
    default:
      return state;
  }
}
