import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="main-content">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form className="checkout-form">
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            State:
            <input type="text" name="state" required />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zipCode" required />
          </label>
          <div className="payment-options">
            <h3>Payment Options:</h3>
            <div className="payment-option">
              <img src="/shoppingreact/applepay.png" alt="Apple Pay" />
              <p>Apple Pay</p>
            </div>
            <div className="payment-option">
              <img src="/shoppingreact/googlepay.png" alt="Google Pay" />
              <p>Google Pay</p>
            </div>
            <div className="payment-option">
              <img src="/shoppingreact/creditcard.png" alt="Credit Card" />
              <p>Credit Card</p>
            </div>
          </div>
          <button type="submit" className="checkout-button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
