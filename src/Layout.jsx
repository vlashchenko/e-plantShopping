import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Layout.css';

const Layout = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
      <div className="main-content">
    <div className="layout">
      <div className="navbar">
        <div className="luxury">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <div className="tag_home_link">
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </Link>
        </div>
        <div className="headline">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Plants
          </Link>
        </div>
        <div className="cart-container">
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#faf9f9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              {totalItemsInCart > 0 && (
                <div className="cart-counter">
                  {totalItemsInCart}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
