import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LeftScreen from './components/LeftScreen';
import NavBar from './components/NavBar';
import ProductInfo from './components/ProductInfo';
import RightScreen from './components/RightScreen';

const App = function () {
  return (
    <div className="App">
      <div className="main_container">
        <LeftScreen />
        <RightScreen />
      </div>
    </div>
  );
};

export default App;
