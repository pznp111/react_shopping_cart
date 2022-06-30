import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import product from '../componemts/Product/Service/productSlice';

const reducer = combineReducers({
    product,
  })
  
  const store = configureStore({
    reducer,
  })
  
export default store;