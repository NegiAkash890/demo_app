import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './css/NavBar.css';
import { BsHeart } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import { filterSearch } from '../redux/actions/productActions';

const NavBar = function () {
  const dispatch = useDispatch('');
  const history = useNavigate();
  const [type, setType] = useState('');
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line
  const toggleVisible = (type) => {
    // eslint-disable-next-line
    setVisible((visible) => {
      return !visible;
    });
    setType(type);
  };
  const handleChange = (e) => {
    dispatch(filterSearch(e.target.value));
  };
  return (
    <div className="top_nav">
      <Slider visible={visible} toggleVisible={toggleVisible} type={type} />
      {/* eslint-disable-next-line */}
      <p
        onClick={() => {
          return history('/');
        }}
        id="logo"
      >
        Myntra
      </p>
      <div className="right_nav">
        <input
          type="search"
          id="search_input"
          placeholder="Search for Shirts"
          onChange={handleChange}
        />

        <ul className="nav_link">
          <li>
            <button
              type="button"
              onClick={() => {
                return toggleVisible('Your Wishlist');
              }}
            >
              <small>Wishlist</small>
              <BsHeart size="1.2rem" color="gray" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                return toggleVisible('Your Cart');
              }}
            >
              <small>Cart</small>
              <FiShoppingBag size="1.2rem" color="gray" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
