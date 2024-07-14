import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./CartItem";
import Layout from "./Layout";
import AppContent from "./AppContent";
import "./App.css";
import Checkout from "./Checkout";

const App = () => {
  const basename = import.meta.env.MODE === 'development' ? '' : '/shoppingreact';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
