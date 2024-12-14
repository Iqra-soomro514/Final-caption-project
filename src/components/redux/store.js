// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import orderSlice from './orderSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
  },
});

export default store;






