import React, { useState } from 'react';
import './css/Card.css';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { BsHeart, BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { addtoWishlist } from '../redux/actions/wishlistAction';

const Card = function ({
  id,
  title,
  gender,
  price,
  color,
  size,
  img,
  Rating,
  Brand,
}) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const alert = useAlert();
  const [view, setView] = useState('none');
  const [index, setIndex] = useState('primary');
  const handleClick = () => {
    const item = {
      ShirtId: id,
      Title: title,
      images: img,
      Price: price,
      Gender: gender,
      size,
    };
    alert.success('Item added to wishlist');
    dispatch(addtoWishlist(item));
  };
  const showInfo = () => {
    const payload = {
      id,
      title,
      gender,
      price,
      color,
      size,
      img,
    };
    history(`/product/${id}`, { state: payload });
  };
  return (
    // eslint-disable-next-line
    <div
      role="navigation"
      className="card_container"
      onMouseEnter={() => {
        return setIndex('secondary');
      }}
      onMouseLeave={() => {
        return setIndex('primary');
      }}
    >
      {/* eslint-disable-next-line */}
      <div role="navigation" className="img" onClick={showInfo}>
        <img src={img[index]} alt="shirt_image" width="240px" height="360px" />
      </div>
      <div className="card_body">
        <div className="card_info">
          <strong>{title}</strong>
          <strong>
            ${price} |{' '}
            <span>
              {' '}
              <BsStar />
              {Rating}
            </span>
            <span> | {Brand}</span>
          </strong>
        </div>
        <button type="button" id="wishlist_button" onClick={handleClick}>
          {' '}
          <BsHeart title="Add to Wishlist" />
        </button>
        <button
          type="button"
          className="view_more"
          style={{ display: `${view}` }}
        >
          <MdOutlineViewCarousel />
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.instanceOf(Object).isRequired,
  Rating: PropTypes.number.isRequired,
  Brand: PropTypes.string.isRequired,
};
export default Card;
