import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../utility/types'
import { fetchProduct } from './thunks/fetchProduct'

export interface CounterState {
  products: IProduct[],
  isLoading: Boolean,
  error: string | null | undefined
}

const initialState: CounterState = {
  products: [],
  isLoading: false,
  error: null,
}

/* The code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. */
export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})


export default counterSlice.reducer