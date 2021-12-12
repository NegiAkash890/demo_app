import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Card from './Card';
import './css/RightScreen.css';

const RightScreen = function () {
  const [items, setItems] = useState([]);
  const newItems = useSelector((state) => {
    return state.products.filtered;
  });
  const [sortFilter, setSortFilter] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.npoint.io/e41ba6bd432b54fa051f')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        dispatch(fetchProducts(data));
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);
  const handleSortFilter = (e) => {
    setSortFilter(e.target.value);
    const orderBy = e.target.value;
    switch (orderBy) {
      case 'ascn':
        return newItems.sort((a, b) => {
          return parseInt(a.Price, 10) > parseInt(b.Price, 10) ? 1 : -1;
        });
      case 'desc':
        return newItems.sort((a, b) => {
          return parseInt(a.Price, 10) > parseInt(b.Price, 10) ? -1 : 1;
        });
      case 'tren':
        return newItems.sort((a, b) => {
          return parseInt(a.Rating, 10) > parseInt(b.Rating, 10) ? -1 : 1;
        });
      default:
        return newItems;
    }
  };
  return (
    <div className="right_container">
      <form>
        <select onChange={handleSortFilter} defaultValue="default">
          <option value="default">Default Value</option>
          <option value="ascn">Price: Low to High</option>
          <option value="desc">Price: Hight to Low</option>
          <option value="tren">Trending: Customer Rating</option>
        </select>
      </form>
      <div className="product_list">
        {newItems === [] ? (
          <h2>No Items to Show ;)</h2>
        ) : (
          newItems?.map((item) => {
            return (
              <Card
                key={item.ShirtId}
                id={item.ShirtId}
                title={item.Title}
                gender={item.Gender}
                price={parseFloat(item.Price)}
                color={item.Color}
                img={item.images}
                size={item.size}
                Brand={item.Brand}
                Rating={parseFloat(item.Rating)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RightScreen;
