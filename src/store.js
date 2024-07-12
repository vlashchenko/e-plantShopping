import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cartReducer here
  },
});

export default store;
