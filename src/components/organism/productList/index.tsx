import React from "react";
import { FlatList, View } from "react-native";
import styled from 'styled-components/native';
import { IProduct } from "../../../utility/types";
import { Button } from "../../atom/button";
import { ProductCard } from "../../molecule/productCard";


const StyledFlatList = styled(FlatList)`

`;


const StyledItemContainer = styled.View`
    flex: 1;
    position: relative;
    
`;

const StyledButton = styled(Button)`
    height: 40px;
    background-color: red;

`;

const CardContainer = styled.View`
  flex: 1;
`;

type ProductListProps = {
    products: IProduct[],
    onAddToCart: (product:IProduct) => void
}

/* The code is defining a functional component called `ProductList`. This component takes two props:
`products` and `onAddToCart` and return a flist of product cards*/
export const ProductList = ({products, onAddToCart}:ProductListProps) => {
   return <CardContainer>
       <StyledFlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> {
            return <StyledItemContainer > 
                <ProductCard product={item} onAddToCart={onAddToCart}/>
            </StyledItemContainer>
        }}
    />
    </CardContainer>

}

