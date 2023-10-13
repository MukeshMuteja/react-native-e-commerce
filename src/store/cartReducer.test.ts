import CartReducerSlice, { addIncrementCount, decrementCount } from './cartReducer'
import { IProduct, IProductCart } from "../utility/types"; 
import { SAMPLE_PRODUCT_1 } from '../utility/constant/test/SampleProduct';

describe('CartReducerSlice', () => {
  it('should handle initial state', () => {
    expect(CartReducerSlice(undefined, { type: 'unknown' })).toEqual({
      products: [],
    });
  });

  const INITIAL_STATE: {products: IProductCart[]} = {products: [{ product: SAMPLE_PRODUCT_1, count: 2 }]};
  

  it('should handle addIncrementCount', () => {
    const productToAdd: IProduct = SAMPLE_PRODUCT_1;
    const nextState = CartReducerSlice(INITIAL_STATE, addIncrementCount(productToAdd));
    expect(nextState.products[0].count).toEqual(3);
    const newProductToAdd: IProduct = SAMPLE_PRODUCT_1;
    const nextStateWithNewProduct = CartReducerSlice(nextState, addIncrementCount(newProductToAdd));
    expect(nextStateWithNewProduct.products).toHaveLength(1);
    expect(nextStateWithNewProduct.products[0]).toEqual({ product: newProductToAdd, count: 4 });
  });

  it('should handle decrementCount', () => {
    const productToDecrement: IProduct = SAMPLE_PRODUCT_1;
    const nextState = CartReducerSlice(INITIAL_STATE, decrementCount(productToDecrement));
    expect(nextState.products[0].count).toEqual(1);
    const nextStateWithRemovedProduct = CartReducerSlice(nextState, decrementCount(productToDecrement));
    expect(nextStateWithRemovedProduct.products).toHaveLength(0);
  });

  it('should add product', () => {
    const product: IProduct = SAMPLE_PRODUCT_1;
    const intialState: {products: IProductCart[]} = {products: []};
    const nextStateWithNewProduct = CartReducerSlice(intialState, addIncrementCount(product));
    expect(nextStateWithNewProduct.products).toHaveLength(1);
    const nextStateWithRemovedProduct = CartReducerSlice(nextStateWithNewProduct, decrementCount(product));
    expect(nextStateWithRemovedProduct.products).toHaveLength(0);
  });

  it('should remove product ', () => {
    const product: IProduct = SAMPLE_PRODUCT_1;
    const intialState: {products: IProductCart[]} = {products: []};
    const nextStateWithRemovedProduct = CartReducerSlice(intialState, decrementCount(product));
    expect(nextStateWithRemovedProduct.products).toHaveLength(0);
  });
});