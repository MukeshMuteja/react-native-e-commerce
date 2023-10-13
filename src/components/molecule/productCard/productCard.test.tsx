import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ProductCard } from './';
import { IProduct } from '../../../utility/types';
import { SAMPLE_PRODUCT_1 } from '../../../utility/constant/test/SampleProduct';

describe('ProductCard Component', () => {
  const sampleProduct: IProduct = SAMPLE_PRODUCT_1;

  const mockOnAddToCart: jest.MockedFunction<(product: IProduct) => void> = jest.fn();

  it('renders the product name and image', () => {
    const { getByText, getByTestId } = render(<ProductCard product={sampleProduct} onAddToCart={mockOnAddToCart}/>);
    const productNameElement = getByText('Sample Product');
    expect(productNameElement).toBeTruthy();
    const productImageElement = getByTestId('product-image');
    expect(productImageElement).toBeTruthy();
    const productPriceElement = getByTestId('product-price');
    expect(productPriceElement).toBeTruthy();;
  });

  it('displays the correct product image', () => {
    const { getByTestId } = render(<ProductCard product={sampleProduct} onAddToCart={mockOnAddToCart}/>);
    const productImage = getByTestId('product-image');
    expect(productImage.props.source.uri).toBe(sampleProduct.img);
  });

  it('should display the product price correctly', () => {
    const { getByTestId } = render(
      <ProductCard product={sampleProduct} onAddToCart={mockOnAddToCart} />
    );
    const priceText = getByTestId('product-price');
    expect(priceText.props.children).toEqual(`${sampleProduct.price.toFixed(2)}$`);
  });

  it('has the correct styling', () => {
    const { getByTestId } = render(<ProductCard product={sampleProduct} onAddToCart={mockOnAddToCart}/>);
    const container = getByTestId('product-card-container');
    expect(container).toHaveStyle({ backgroundColor: 'white' });
  });

  it('calls onAddToCart when Add Cart button is pressed', () => {
    const { getByText } = render(
      <ProductCard product={sampleProduct} onAddToCart={mockOnAddToCart}/>
    );
    const buttons = getByText('Add');
    fireEvent.press(buttons);
    expect(mockOnAddToCart).toHaveBeenCalledWith(sampleProduct);
  });
});