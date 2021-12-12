import React, { useState } from 'react';
import './css/Product.css';
import { useAlert } from 'react-alert';
import { AiOutlineHeart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/actions/cartActions';
import { addtoWishlist } from '../redux/actions/wishlistAction';

const ProductInfo = function () {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [size, setSize] = useState('');
  const addToCart = () => {
    const payload = {
      ShirtId: state.id,
      Title: state.title,
      images: state.img,
      Price: state.price,
      Gender: state.gender,
      size,
    };
    alert.success(`Item of size ${size} added cart`);
    dispatch(addtoCart(payload));
  };
  const addToWishlist = () => {
    const item = {
      ShirtId: state.id,
      Title: state.title,
      images: state.img,
      Price: state.price,
      Gender: state.gender,
      size: state.size,
    };
    alert.success('Item added to Wishlist');
    dispatch(addtoWishlist(item));
  };
  const handleChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="product_container" key={state.id}>
      <div className="product_left_container">
        <img src={state.img.primary} alt="main_image" />
        <img src={state.img.secondary} alt="secondary_image" height="100%" />
      </div>
      <div className="product_right_container">
        <div>
          {/* eslint-disable */}
          <h2>{state.title}</h2>
          <h2>Rs. {state.price}</h2>
          <h2 id="size">Select Size</h2>
          <div className="boxed" onChange={handleChange}>
            {state.size.map((s) => {
              return (
                <>
                  <input
                    type="radio"
                    key={s}
                    id={s}
                    name="shirt_size"
                    value={s}
                  />
                  <label htmlFor={s}>{s}</label>
                </>
              );
            })}
          </div>
          {/* eslint-enable */}
        </div>
        <div className="product_button">
          <button type="button" id="cart_button" onClick={addToCart}>
            Add to Cart
          </button>
          <button type="button" id="wishlist_button" onClick={addToWishlist}>
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
