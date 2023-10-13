import { createSelector } from 'reselect';
import { RootState } from '..';

const productSelector = (state: RootState) => state?.products?.products || [];
const loaderSelector = (state: RootState) => state?.products?.isLoading || false;

/* The code `export const productsSelector = createSelector(productSelector, (products) => products);`
is creating a selector function called `productsSelector`. */
export const productsSelector = createSelector(
    productSelector,
  (products) => products
);

/* The code `export const productLoaderSelector = createSelector(loaderSelector, (isLoading) =>
isLoading);` is creating a selector function called `productLoaderSelector`. */
export const productLoaderSelector = createSelector(
  loaderSelector,
(isLoading) => isLoading
);