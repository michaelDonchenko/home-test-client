import { createSlice } from '@reduxjs/toolkit'
import {
  fiveDaysSales,
  topSoldItems,
  topUniqueItems,
} from '../actions/orderActions'

const initialState = {
  topSoldProducts: null,
  topUniqueItems: null,
  fiveDaysSales: null,
  loading: false,
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
      // top five unique orders
      .addCase(topUniqueItems.pending, (state, action) => {
        state.loading = true
      })
      .addCase(topUniqueItems.fulfilled, (state, action) => {
        state.loading = false
        state.topUniqueItems = action.payload.data.products
      })
      .addCase(topUniqueItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      // past five days sales
      .addCase(fiveDaysSales.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fiveDaysSales.fulfilled, (state, action) => {
        state.loading = false
        state.fiveDaysSales = action.payload.data.salesByDay
      })
      .addCase(fiveDaysSales.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const {} = orderSlice.actions

export default orderSlice.reducer
