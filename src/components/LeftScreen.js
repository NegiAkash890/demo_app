import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { BiReset } from 'react-icons/bi';
import { filterAction, filterReset } from '../redux/actions/productActions';
import './css/LeftScreen.css';
import MobileLeftNav from './MobileLeftNav';

const LeftScreen = function () {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('all');
  const [colors, setColors] = useState([false, false, false]);
  const [brands, setBrands] = useState([false, false, false]);

  const handleChange = (e, FilterType) => {
    switch (FilterType) {
      case 'gender_filter':
        setGender(e.target.value);
        break;
      case 'brand_filter':
        if (e.target.value === 'Denim') {
          const newBrands = [...brands];
          newBrands[0] = !newBrands[0];
          setBrands(newBrands);
        } else if (e.target.value === 'Levi') {
          const newBrands = [...brands];
          newBrands[1] = !newBrands[1];
          setBrands(newBrands);
        } else if (e.target.value === 'H&M') {
          const newBrands = [...brands];
          newBrands[2] = !newBrands[2];
          setBrands(newBrands);
        }
        break;
      case 'color_filter':
        if (e.target.value === 'white') {
          const newColors = [...colors];
          newColors[0] = !newColors[0];
          setColors(newColors);
        } else if (e.target.value === 'blue') {
          const newColors = [...colors];
          newColors[1] = !newColors[1];
          setColors(newColors);
        } else if (e.target.value === 'grey') {
          const newColors = [...colors];
          newColors[2] = !newColors[2];
          setColors(newColors);
        }
        break;
      default:
    }
  };

  const handleClick = () => {
    /* eslint-disable */
    const noColorSelected = colors.every((val) => val === false );
    const noBrandSelected = brands.every((val) => val === false );

    if (gender === 'all') {
      return alert('Please Select a gender');
    }
    if (noColorSelected === true) {
      return alert('Please Select a color(s)');
    } 
    if(noBrandSelected === true){
      return alert('Please Select a brand(s)');
    }
    /* eslint-enable */
    return dispatch(filterAction([gender, colors, brands]));
  };
  const handleReset = () => {
    setGender('all');
    const newArray = [false, false, false];
    setColors(newArray);
    setBrands(newArray);
    dispatch(filterReset());
  };

  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTabOrMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <>
      {isTabOrMobile && <MobileLeftNav />}
      {isDesktop && (
        <form className="left_container">
          <div name="gender">
            <h2 id="filter">FILTERS</h2>
            <div
              className="gender_filter"
              onChange={(e) => {
                return handleChange(e, 'gender_filter');
              }}
            >
              <label htmlFor="men">
                <input type="radio" name="gender" id="men" value="men" />
                Men
              </label>
              <label htmlFor="women">
                <input type="radio" name="gender" id="women" value="women" />
                Women
              </label>
            </div>
          </div>
          <h3>Color</h3>
          <div
            className="color_filter"
            onChange={(e) => {
              return handleChange(e, 'color_filter');
            }}
          >
            <label htmlFor="white">
              <input type="checkbox" name="color" id="white" value="white" />
              white
            </label>
            <label htmlFor="blue">
              <input type="checkbox" name="color" id="blue" value="blue" />
              blue
            </label>
            <label htmlFor="grey">
              <input type="checkbox" name="color" id="grey" value="grey" />
              grey
            </label>
          </div>
          <h3>Brand</h3>
          <div
            className="brand_filter"
            onChange={(e) => {
              return handleChange(e, 'brand_filter');
            }}
          >
            <label htmlFor="Denim">
              <input type="checkbox" name="brand" id="Denim" value="Denim" />
              Denim
            </label>
            <label htmlFor="Levi">
              <input type="checkbox" name="brand" id="Levi" value="Levi" />
              Levi
            </label>
            <label htmlFor="H&M">
              <input type="checkbox" name="brand" id="H&M" value="H&M" />
              H&M
            </label>
            <div className="button_grp">
              <button type="button" id="filter_button" onClick={handleClick}>
                Apply
              </button>
              <button type="button" id="reset" onClick={handleReset}>
                <BiReset />
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default LeftScreen;
