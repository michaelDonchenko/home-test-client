import { createSlice } from '@reduxjs/toolkit'
import {
  create,
  destroy,
  getProduct,
  getProducts,
  update,
} from '../actions/productActions'

const initialState = {
  products: null,
  loading: false,
  error: null,
  success: null,
  productId: null,
  product: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.success = null
    },
    setProductToUpdate: (state, { payload }) => {
      state.productId = payload
    },
    resetProductId: (state) => {
      state.productId = null
    },
    clearProduct: (state) => {
      state.product = null
    },
  },
  extraReducers: (builder) => {
    builder
      //get products
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.data.products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      //get products
      .addCase(getProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload.data.product
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      //create product
      .addCase(create.pending, (state, action) => {
        state.loading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false
        state.success = action.payload.data.message
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      //delete product
      .addCase(destroy.pending, (state, action) => {
        state.loading = true
      })
      .addCase(destroy.fulfilled, (state, action) => {
        state.loading = false
        state.success = action.payload.data.message
      })
      .addCase(destroy.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      //update product
      .addCase(update.pending, (state, action) => {
        state.loading = true
      })
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false
        state.success = action.payload.data.message
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const {
  resetSuccess,
  setProductToUpdate,
  resetProductId,
  clearProduct,
} = productSlice.actions

export default productSlice.reducer
