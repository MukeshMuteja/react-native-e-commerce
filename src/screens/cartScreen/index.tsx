import React, { useEffect } from "react";
import { View , Text} from "react-native";
import { AppDispatch, RootState } from "../../store";
import {  useSelector } from 'react-redux'
import { addIncrementCount, decrementCount } from "../../store/cartReducer";
import { CartList } from "../../components/organism/cartList";
import { cartProductSelector } from "../../store/selector/cartSelector";
import styled from "styled-components/native";
import { CartTotal } from "../../components/molecule/cartTotal";

const StyledContainer = styled.View`
  background-color: #D3D3D3;
  flex: 1;
`;

/**
 * The CartScreen component renders a list of products from the cart and provides callbacks for
 * decrementing and incrementing the quantity of each product.
 * @returns The CartScreen component is returning a StyledContainer component that contains a CartList
 * component.
 */
export const CartScreen = () => {

    const products = useSelector(cartProductSelector)

    const onPlaceOrderClicked = () => {
      //Place Order Code here
    }

    return <StyledContainer >
                <CartList items={products} 
                    onDecrementProduct={(product)=> AppDispatch(decrementCount(product))}
                    onIncrementProduct={(product)=> AppDispatch(addIncrementCount(product))}
                />
                <CartTotal products={products} onPlaceOrderClicked={onPlaceOrderClicked}/>
            </StyledContainer>
}