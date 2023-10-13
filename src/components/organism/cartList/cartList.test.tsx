import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { CartList } from '.'; 
import { IProductCart } from '../../../utility/types';
import { SAMPLE_PRODUCT_1, SAMPLE_PRODUCT_2 } from '../../../utility/constant/test/SampleProduct';

describe('CartList Component', () => {
  const items: IProductCart[] = [
    {
      product: SAMPLE_PRODUCT_1,
      count: 2,
    },
    {
      product: SAMPLE_PRODUCT_2,
      count: 3,
    },
  ];

  const onIncrementProduct = jest.fn();
  const onDecrementProduct = jest.fn();

  it('renders a list of CartItem components', () => {
    const { getAllByTestId } = render(
      <CartList items={items} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />
    );
    const cartItemElements = getAllByTestId('cart-item');
    expect(cartItemElements).toHaveLength(items.length);
  });

  it('calls onIncrementProduct when increment button is pressed in CartItem', () => {
    const { getByTestId } = render(
      <CartList items={items} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />
    );

    const incrementButton = getByTestId(`increment-button-${SAMPLE_PRODUCT_1.id}`); 
    fireEvent.press(incrementButton);

    expect(onIncrementProduct).toHaveBeenCalledWith(items[0].product);
  });

  it('calls onDecrementProduct when decrement button is pressed in CartItem', () => {
    const { getByTestId } = render(
      <CartList items={items} onIncrementProduct={onIncrementProduct} onDecrementProduct={onDecrementProduct} />
    );

    const decrementButton = getByTestId(`decrement-button-${SAMPLE_PRODUCT_2.id}`); 
    fireEvent.press(decrementButton);

    expect(onDecrementProduct).toHaveBeenCalledWith(items[1].product);
  });
});