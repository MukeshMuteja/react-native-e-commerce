import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartTotal } from './index';
import { SAMPLE_PRODUCT_1 } from '../../../utility/constant/test/SampleProduct';
import { calculateCartAmount } from '../../../utility/helper';

jest.mock('../../../utility/helper', () => ({
    calculateCartAmount: jest.fn(()=> 0),
  }));

  
describe('CartTotal component', () => {
  const mockOnPlaceOrderClicked = jest.fn();
  const PRODUCT_QUANTITY = 1

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render with zero total amount', () => {
    const { queryByText } = render(
      <CartTotal 
        products={[]} 
        onPlaceOrderClicked={mockOnPlaceOrderClicked}
      />
    );
    expect(queryByText(/./)).toBeNull();
  });

  it('renders correctly with non-zero total amount', () => {
      const calculateCartAmount = require('../../../utility/helper').calculateCartAmount;
      calculateCartAmount.mockImplementation(() => SAMPLE_PRODUCT_1.price * PRODUCT_QUANTITY);
    const { getByText } = render(
      <CartTotal 
        products={[{product: SAMPLE_PRODUCT_1, count: PRODUCT_QUANTITY}]} 
        onPlaceOrderClicked={mockOnPlaceOrderClicked}
      />
    );
    expect(getByText(`${SAMPLE_PRODUCT_1.price.toFixed(2)}$`)).toBeTruthy();
  });

  it('calls onPlaceOrderClicked when the button is pressed', () => {
    const { getByText } = render(
      <CartTotal 
      products={[{product: SAMPLE_PRODUCT_1, count: 1}]}  
        onPlaceOrderClicked={mockOnPlaceOrderClicked}
      />
    );
    fireEvent.press(getByText('Place Order'));
    expect(mockOnPlaceOrderClicked).toHaveBeenCalledTimes(1);
  });

  it('should not recompute the totalAmount on re-render if products have not changed', () => {
    const products = [{product: SAMPLE_PRODUCT_1, count: PRODUCT_QUANTITY}];
    const { rerender } = render(
      <CartTotal products={products} onPlaceOrderClicked={jest.fn()} />
    );
    expect(calculateCartAmount).toHaveBeenCalledTimes(1);

    // Re-render with the same products
    rerender(<CartTotal products={products} onPlaceOrderClicked={jest.fn()} />);
    expect(calculateCartAmount).toHaveBeenCalledTimes(1);

    const updatedProducts = [{product: SAMPLE_PRODUCT_1, count: PRODUCT_QUANTITY + 1}];
    rerender(<CartTotal products={updatedProducts} onPlaceOrderClicked={jest.fn()} />);
    expect(calculateCartAmount).toHaveBeenCalledTimes(2);
  });

  

  });
