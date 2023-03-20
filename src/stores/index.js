import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './SidebarSlice';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categorySlice,
    product:productSlice
  }
})
export default store;