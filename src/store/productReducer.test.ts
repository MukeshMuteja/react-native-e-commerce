import counterSlice from './productReducer';  
import { fetchProduct } from './thunks/fetchProduct';
import { PayloadAction } from '@reduxjs/toolkit';

describe('counterSlice', () => {
  it('should handle initial state', () => {
    expect(counterSlice(undefined, { type: 'unknown' })).toEqual({
      products: [],
      isLoading: false,
      error: null,
    });
  });

  it('should handle fetchProduct.pending', () => {
    const action: PayloadAction = {
      type: fetchProduct.pending.type,
      payload: undefined,
    };
    const state = counterSlice(undefined, action);
    expect(state).toEqual({
      products: [],
      isLoading: true,
      error: null,
    });
  });

  it('should handle fetchProduct.fulfilled', () => {
    const mockProducts = undefined;
    const action: PayloadAction = {
      type: fetchProduct.fulfilled.type,
      payload: mockProducts,
    };
    const state = counterSlice(undefined, action);
    expect(state).toEqual({
      products: mockProducts,
      isLoading: false,
      error: null,
    });
  });

  it('should handle fetchProduct.rejected', () => {
    const mockError = 'Network error';
    const action = {
      type: fetchProduct.rejected.type,
      error: {message: mockError},
    };
    const state = counterSlice(undefined, action);
    expect(state).toEqual({
      products: [],
      isLoading: false,
      error: mockError,
    });
  });
});