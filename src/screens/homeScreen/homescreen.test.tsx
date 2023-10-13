import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import { HomeScreen } from './'; 
import { addIncrementCount } from "../../store/cartReducer";
import { SAMPLE_PRODUCT_1 } from '../../utility/constant/test/SampleProduct';

const mockStore = configureStore([]);
const store = mockStore({
    products: {
        products: [
            {
                product:SAMPLE_PRODUCT_1,
            }
        ],
    isLoading: false,
    error: undefined
  },
});

// Mock the redux actions

jest.mock('../../store/cartReducer', () => ({
    addIncrementCount: jest.fn(),
  }));
  
  jest.mock('../../store', () => ({
      AppDispatch: jest.fn(),
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

describe('HomeScreen', () => {
    it('should dispatch Add Product action ', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      );
      fireEvent.press(getByTestId('button-component'));
      expect(addIncrementCount).toHaveBeenCalledWith({
        product: SAMPLE_PRODUCT_1}); 
    });
  });
  
  
  
  
  
  