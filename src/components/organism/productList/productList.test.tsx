import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductList } from '.';
import { IProduct } from '../../../utility/types';
import { SAMPLE_PRODUCT_1, SAMPLE_PRODUCT_2 } from '../../../utility/constant/test/SampleProduct';

describe('<ProductList />', () => {
    const mockOnAddToCart: jest.MockedFunction<(product: IProduct) => void> = jest.fn();
  const products: IProduct[] = [
    SAMPLE_PRODUCT_1,
    SAMPLE_PRODUCT_2
  ];
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <ProductList products={products} onAddToCart={mockOnAddToCart} />
    );
    expect(getByText(SAMPLE_PRODUCT_1.name)).toBeTruthy();
    expect(getByText(SAMPLE_PRODUCT_2.name)).toBeTruthy();
  });

  it('calls onAddToCart when Add Cart button is pressed', () => {
    const { getAllByText } = render(
      <ProductList products={products} onAddToCart={mockOnAddToCart} />
    );
    const buttons = getAllByText('Add');
    fireEvent.press(buttons[0]);
    expect(mockOnAddToCart).toHaveBeenCalledWith(products[0]);
  });
});