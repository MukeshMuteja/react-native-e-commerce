import React, { useMemo } from "react";
import styled from "styled-components/native";
import { calculateCartAmount } from "../../../utility/helper";
import {  IProductCart } from "../../../utility/types";
import { Button } from "../../atom/button";
import { Text } from "../../atom/text";

type CartTotalProps = {
    products : IProductCart[],
    onPlaceOrderClicked: ()=> void
}

const Container = styled.View`
height: 60px;
border-width: 1px;
background-color: white;
border-color: grey;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 20px;


`;

const StyledTotalTitle = styled(Text)`
font-size: 18px;
font-weight: 400;

`;

const StyledTotalText = styled(Text)`
font-size: 18px;
font-weight: 400;

`;
const StyledButton = styled(Button)`
    border-radius: 14px;
    padding: 10px 40px;
    background-color: red;

`;

export const CartTotal = ({products, onPlaceOrderClicked}: CartTotalProps) => {
    const totalAmount = useMemo(() => calculateCartAmount(products), [products])
    if (totalAmount === 0 || !products) return null
    
    return <Container>
        <StyledTotalText>{`${totalAmount.toFixed(2)}$`}</StyledTotalText>
        <StyledButton text="Place Order" onPress={onPlaceOrderClicked}></StyledButton>
    </Container>
}