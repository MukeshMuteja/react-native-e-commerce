import React, { useEffect } from "react";
import { View , Text, ActivityIndicator} from "react-native";
import { AppDispatch, RootState } from "../../store";
import {  useSelector } from 'react-redux'
import { ProductList } from "../../components/organism/productList"
import { IProduct } from "../../utility/types";
import { addIncrementCount } from "../../store/cartReducer";
import { fetchProduct } from "../../store/thunks/fetchProduct";
import { productLoaderSelector, productsSelector } from "../../store/selector/productSelector";
import styled from "styled-components/native";
import { Loader } from "../../components/atom/loader";

const StyledContainer = styled.View`
  background-color: #D3D3D3;
  flex: 1;
`;

/**
 * The HomeScreen component renders a container that displays a loader if products are still loading,
 * or a list of products with an "Add to Cart" button for each product.
 * @returns The HomeScreen component is returning a JSX element.
 */
export const HomeScreen = () => {

    const products = useSelector(productsSelector)
    const isLoading = useSelector(productLoaderSelector)
    
    useEffect(() => {
        AppDispatch(fetchProduct())
      }, [])

      const handleAddToCart = (product: IProduct) => {
        AppDispatch(addIncrementCount(product))
      }
      
    return <StyledContainer >
      {
        isLoading 
        ?  <Loader />
        :  <ProductList products={products} onAddToCart={handleAddToCart}/>
      }
        </StyledContainer>
}