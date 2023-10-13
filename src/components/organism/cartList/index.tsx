import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IProduct, IProductCart } from '../../../utility/types';
import {CartItem} from '../../molecule/cartItem';


interface CartCardProps {
  items: IProductCart[];
  onIncrementProduct: (product:IProduct) => void;
  onDecrementProduct: (product:IProduct) => void;
}
const CardContainer = styled.View`
  padding: 16px;
  flex: 1;
`;

const StyledFlatList = styled(FlatList)`
`;


/**
 * React component that renders a list of cart items and
 * provides callbacks for incrementing and decrementing the quantity of each item.
 * @param  - - `items`: An array of objects representing the products in the cart.
 * @returns The `CartList` component is returning a `CardContainer` component that contains a
 * `StyledFlatList` component. The `StyledFlatList` component is rendering a list of `CartItem`
 * components based on the `items` prop passed to the `CartList` component.
 */
export const CartList: React.FC<CartCardProps> = ({ items, onIncrementProduct, onDecrementProduct }) => {
  return (
    <CardContainer testID='cart-list'>
        <StyledFlatList
        data={items}
        
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> {
            return <CartItem
              key={item.product.id}
              cartProduct={item}
              onDecrementProduct={onDecrementProduct}
              onIncrementProduct={onIncrementProduct}
          />
        }}
    />
    </CardContainer>
  );
};
