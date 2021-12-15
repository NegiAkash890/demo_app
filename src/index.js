import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './redux/store';
import App from './App';
import NavBar from './components/NavBar';
import ProductInfo from './components/ProductInfo';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="product">
              <Route exact path=":pid" element={<ProductInfo />} />
            </Route>
          </Routes>
        </Provider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
