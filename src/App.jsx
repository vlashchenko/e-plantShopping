import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './CartItem';
import Layout from './Layout';
import AppContent from './AppContent'; // Separate component for the start page
import './App.css';
import Checkout from './Checkout'; // Import the Checkout component

function App() {
  return (
    <Router basename="/shoppingreact">
      <Routes>
        <Route path="/" element={<AppContent />} /> {/* Start page without navbar */}
        <Route path="/products" element={<Layout><ProductList /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} /> {/* Checkout page */}
      </Routes>
    </Router>
  );
}

export default App;
