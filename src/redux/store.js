import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/productSlice'
import modalSlice from './reducers/modalSlice'
import cartSlice from './reducers/cartSlice'
import orderSlice from './reducers/orderSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice,
    cart: cartSlice,
    order: orderSlice,
  },
})
