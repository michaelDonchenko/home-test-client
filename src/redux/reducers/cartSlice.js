import { createSlice } from '@reduxjs/toolkit'

const cartFromLocalStorage = window.localStorage.getItem('cart')
  ? JSON.parse(window.localStorage.getItem('cart'))
  : null

const initialState = {
  cart: cartFromLocalStorage,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload
    },
    removeCart: (state) => {
      state.cart = null
    },
  },
})

export const { addToCart, removeCart } = cartSlice.actions

export default cartSlice.reducer
