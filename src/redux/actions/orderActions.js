import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  pastFiveDaysSales,
  topFiveSoldItems,
  topFiveUniqueItems,
} from '../../api/order'

export const topSoldItems = createAsyncThunk(
  'order/topSoldItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await topFiveSoldItems()

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const topUniqueItems = createAsyncThunk(
  'order/topUniqueItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await topFiveUniqueItems()

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const fiveDaysSales = createAsyncThunk(
  'order/fiveDaysSales',
  async (_, { rejectWithValue }) => {
    try {
      const response = await pastFiveDaysSales()

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
