import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; 
import { CartItem } from './'; 
import { IProductCart } from '../../../utility/types';
import { SAMPLE_PRODUCT_1 } from '../../../utility/constant/test/SampleProduct';

describe('CartItem Component', () => {
  const product: IProductCart = {
    product: SAMPLE_PRODUCT_1,
    count: 2,
  };

  const onIncrementProduct = jest.fn();
  const onDecrementProduct = jest.fn();

  it('renders the product details and buttons', () => {
    const { getByText, getByTestId } = render( <CartItem cartProduct={product} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />);

    expect(getByText('Sample Product')).toBeTruthy();
    expect(getByTestId('product-image')).toBeTruthy();
    expect(getByTestId(`decrement-button-${product.product.id}`)).toBeTruthy();
    expect(getByTestId(`increment-button-${product.product.id}`)).toBeTruthy();
    expect(getByText('2')).toBeTruthy(); 
  });

  it('calls onIncrementProduct when increment button is pressed', () => {
    const { getByTestId } = render(<CartItem cartProduct={product} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />);
    fireEvent.press(getByTestId(`increment-button-${product.product.id}`));
    expect(onIncrementProduct).toHaveBeenCalledWith(product.product);
  });

  it('calls onDecrementProduct when decrement button is pressed', () => {
    const { getByTestId } = render(<CartItem cartProduct={product} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />);
    fireEvent.press(getByTestId(`decrement-button-${product.product.id}`));
    expect(onDecrementProduct).toHaveBeenCalledWith(product.product);
  });

  it('renders the correct product image', () => {
    const { getByTestId } = render(
      <CartItem cartProduct={product} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />
    );
    const productImage = getByTestId('product-image');
    expect(productImage.props.source.uri).toBe(product.product.img);
  });
});