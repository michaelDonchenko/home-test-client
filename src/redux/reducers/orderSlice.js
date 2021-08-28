import { createSlice } from '@reduxjs/toolkit'
import { topSoldItems } from '../actions/orderActions'

const initialState = {
  topSoldProducts: null,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // top five sold orders
      .addCase(topSoldItems.pending, (state, action) => {
        state.loading = true
      })
      .addCase(topSoldItems.fulfilled, (state, action) => {
        state.loading = false
        state.topSoldProducts = action.payload.data.products
      })
      .addCase(topSoldItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const {} = orderSlice.actions

export default orderSlice.reducer
