import React from "react";
import styled from "styled-components/native";
import { IProduct } from "../../../utility/types";
import { Button } from "../../atom/button";
import { Image } from "../../atom/image";
import { Text } from "../../atom/text";


const ImageContainer = styled.View`
    flex: 1;
    
    
`;

const StyledTextComponent = styled(Text)`
    text-align: center;
    padding: 5px;
    
`;

const StyledPriceTextComponent = styled(Text)`
    font-size: 18px;
    margin-left: 10px;
    
`;

const Container = styled.View`
    aspect-ratio: 0.51;
    margin: 20px 10px;
    width: 90%;  
    borderRadius: 20px;
    overflow: hidden;
    background-color: white;
`;

const StyleProductDetailContainer = styled.View`
    margin: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const StyledButton = styled(Button)`
    height: 30px;
    border-radius: 20px;
    width: 50px;
    padding: 0px 0px;
    font-size: 12px;
    background-color: red;

`;

type ProductCardProps =  {
  product: IProduct;
  onAddToCart: (product:IProduct) => void
}


/**
 * The ProductCard component renders a card displaying product information and a button to add the
 * product to the cart.
 * @param {ProductCardProps}  - - `product`: The product object that contains information about the
 * product, such as name, image, and price.
 * @returns The `ProductCard` component is being returned.
 */
export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const onAddToCartProductClicked = () => {
        onAddToCart(product)
    }
    return (
      <Container testID="product-card-container">
        <ImageContainer>
          <Image 
          testID="product-image"
          image={product.img} 
          />
        </ImageContainer>
        <StyledTextComponent>
          {product.name}
        </StyledTextComponent>
        <StyleProductDetailContainer>
          <StyledPriceTextComponent testID="product-price">{`${product?.price?.toFixed(2)}$`}</StyledPriceTextComponent>
          <StyledButton text="Add" onPress={onAddToCartProductClicked}/>
        </StyleProductDetailContainer>
        
      </Container>
    );
  };
