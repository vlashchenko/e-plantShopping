import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Layout.css';

const Layout = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  };

  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  return (
    <div className="layout">
      <div className="navbar" style={styleObj}>
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
            style={{ height: '70px', width: '70px', borderRadius: '50%' }}
          />
          <Link to="/" className="tag_home_link" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </Link>
        </div>
        <div className="headline" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '20px' }}>
          <Link to="/" style={styleA}>
            Plants
          </Link>
        </div>
        <div style={{ position: 'relative' }}>
          <Link to="/cart" style={styleA}>
            <h1 className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height="68"
                width="68"
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
            </h1>
            {totalItemsInCart > 0 && (
              <div className="cart-counter">
                {totalItemsInCart}
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
