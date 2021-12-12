import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
    products: productReducer,
    wishlists: wishlistReducer,
    cart: cartReducer
});

export default rootReducer;
