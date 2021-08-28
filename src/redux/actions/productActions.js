import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProducts,
  updateProduct,
} from '../../api/products'

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts()

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchProduct(id)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const create = createAsyncThunk(
  'product/create',
  async (values, { rejectWithValue }) => {
    try {
      const response = await createProduct(values)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const destroy = createAsyncThunk(
  'product/destroy',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const update = createAsyncThunk(
  'product/update',
  async (values, { rejectWithValue }) => {
    try {
      const response = await updateProduct(values)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
