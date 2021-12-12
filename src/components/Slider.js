import React from 'react';
import PropTypes from 'prop-types';
import './css/Slider.css';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../redux/actions/cartActions';
import { removefromWishlist } from '../redux/actions/wishlistAction';

const Slider = function ({ visible, toggleVisible, type }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const items = useSelector((state) => {
    return state;
  });
  const handleClick = () => {
    toggleVisible();
  };
  const removeItem = (shirtId, from) => {
    if (from === 'cart') {
      dispatch(removefromCart(shirtId));
      alert.show('Items removed from Cart');
    } else {
      dispatch(removefromWishlist(shirtId));
      alert.show('Items removed from Wishlist');
    }
  };
  // Either show cart or wishlist depending upon the type
  return (
    <div className={visible === true ? 'slider active' : 'slider hide'}>
      <div className="slider_info">
        <p>{type}</p>
        <button type="button" id="slider_button" onClick={handleClick}>
          &times;
        </button>
      </div>
      <div className="items_container">
        {type === 'Your Cart'
          ? items.cart.cart.map((item) => {
            return (
              <div className="cart_container" key={item.shirtId}>
                <div className="img">
                  <img src={item.images.primary} alt="shirt_image" />
                </div>
                <div className="card_body">
                  <div className="card_info">
                    <strong>{item.Title}</strong>
                    <strong>Rs.{item.Price}</strong>
                    <strong>For {item.Gender} | Size : {item.size}</strong>
                  </div>
                  <div>
                    <button
                      type="button"
                      id="remove"
                      onClick={() => {
                        removeItem(item.ShirtId, 'cart');
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
          : items.wishlists.wishlist.map((item) => {
            return (
              <div className="wishlist_container" key={item.shirtId}>
                <div className="img">
                  <img src={item.images.primary} alt="shirt_image" />
                </div>
                <div className="wishlist_body">
                  <div className="wishlist_info">
                    <strong>{item.Title}</strong>
                    <ul className="size_list">
                      {item.size.map((i) => { return <li>{i}</li>; })}
                    </ul>
                    <strong>Rs.{item.Price}</strong>
                  </div>
                  <div>
                    <button
                      type="button"
                      id="remove"
                      onClick={() => {
                        removeItem(item.ShirtId, 'wishlist');
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
Slider.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleVisible: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default Slider;
