import { createAsyncThunk } from '@reduxjs/toolkit'
import { topFiveSoldItems } from '../../api/order'

export const topSoldItems = createAsyncThunk(
  'order/topSoldItems',
  async (options, { rejectWithValue }) => {
    try {
      const response = await topFiveSoldItems(options)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
