import React from 'react';
import { useAlert } from 'react-alert';
import { BsFilterRight } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import './css/LeftScreen.css';

const MobileLeftNav = function () {
  const alert = useAlert();
  const handleClick = () => {
    alert.error('Feature not Ready ! Switch of Large Screens');
  };
  return (
    <div className="mobile_left_container">
      <div className="sort_tab">
        <div className="header">
          <button type="button" onClick={handleClick}>
            {' '}
            <MdSort />
            SORT
          </button>
        </div>
      </div>
      <div className="filter_tab">
        <div className="header">
          <button type="button" onClick={handleClick}>
            {' '}
            <BsFilterRight />
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileLeftNav;
