import { createSelector } from 'reselect';
import { RootState } from '..';

const cartSelector = (state: RootState) => state?.cart?.products || [];

/* The code is creating a selector function called `cartProductSelector` using the `createSelector`
function from the `reselect` library. */
export const cartProductSelector = createSelector(
    cartSelector,
  (products) => products
);