import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CartScreen } from './'; 
import { addIncrementCount, decrementCount } from "../../store/cartReducer";
import { SAMPLE_PRODUCT_1 } from '../../utility/constant/test/SampleProduct';

const PRODUCT_QUANTITY = 5

const mockStore = configureStore([]);
const store = mockStore({
  cart: {
    products: [
        {
            product:SAMPLE_PRODUCT_1,
            count: PRODUCT_QUANTITY
        }
      ,
    ],
  },
});


jest.mock('../../store/cartReducer', () => ({
    addIncrementCount: jest.fn(),
    decrementCount: jest.fn(),
  }));
  
  jest.mock('../../store', () => ({
      AppDispatch: jest.fn(),
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

describe('CartScreen', () => {
    it('should render CartList with the correct props', () => {
      const { getByText } = render(
        <Provider store={store}>
          <CartScreen />
        </Provider>
      );
  
      expect(getByText(SAMPLE_PRODUCT_1.name)).toBeTruthy();
      expect(getByText(`${(SAMPLE_PRODUCT_1.price * PRODUCT_QUANTITY).toFixed(2)}$`)).toBeTruthy();
      expect(getByText(`Place Order`)).toBeTruthy();
      expect(getByText(`${PRODUCT_QUANTITY}`)).toBeTruthy();
    });
  
    it('should dispatch addIncrementCount action on increment product', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <CartScreen />
        </Provider>
      );
  
      fireEvent.press(getByTestId(`increment-button-${SAMPLE_PRODUCT_1.id}`));
      expect(addIncrementCount).toHaveBeenCalledWith(SAMPLE_PRODUCT_1); 
    });
  
    it('should dispatch decrementCount action on decrement product', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <CartScreen />
        </Provider>
      );
      fireEvent.press(getByTestId(`decrement-button-${SAMPLE_PRODUCT_1.id}`));
  
      expect(decrementCount).toHaveBeenCalledWith(SAMPLE_PRODUCT_1); // adjust the argument to match your action creator
      
    });
  });
  
  
  
  
  
  