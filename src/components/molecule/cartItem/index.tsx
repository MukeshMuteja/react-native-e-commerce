// ProductImage.tsx
import styled from 'styled-components/native';
import { IProduct, IProductCart } from '../../../utility/types';
import { Button } from '../../atom/button';
import { Image } from '../../atom/image';
import { Text } from '../../atom/text';

const ImageContainer = styled.View`
    width: 100px;
    aspect-ratio: 0.7;
`;

const Container = styled.View`
  margin-bottom: 10px;
    flex-direction: row;
    justify-content: center;
    height: 100px;
    borderRadius: 20px;
    overflow: hidden;
    background-color: white;
`;

const ProductDetailContainer = styled.View`
    flex: 1;
    padding: 10px 10px;
    align-items: center;
    justify-content: center;
`;

const StyledCartButtons = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    
`;

const StyledProductName = styled(Text)`
    font-size:16px;
`;

const StyledIncrementDecremenetButton = styled(Button)`
height: 25px;
width: 25px;
padding: 0px;
`

const StyledIncrementButton = styled(StyledIncrementDecremenetButton)`
    background-color: green;
`;

const StyledDecrementButton = styled(StyledIncrementDecremenetButton)`
    background-color: red;
`;


interface CartItemProps {
  cartProduct: IProductCart;
  onIncrementProduct: (product:IProduct) => void
  onDecrementProduct: (product:IProduct) => void
}


export const CartItem: React.FC<CartItemProps> = ({ cartProduct, onIncrementProduct, onDecrementProduct }) => {
const product = cartProduct?.product

  return (
    <Container testID={'cart-item'}>
    <ImageContainer>
      <Image testID={'product-image'} image={product?.img} />
    </ImageContainer>
    <ProductDetailContainer>
      <StyledProductName>{product?.name}</StyledProductName>
      <StyledCartButtons>
        <StyledDecrementButton testID={`decrement-button-${product.id}`} text='-' onPress={()=>{onDecrementProduct(product)}}/>
        <StyledProductName>{cartProduct?.count}</StyledProductName>
        <StyledIncrementButton testID={`increment-button-${product.id}`} text='+' onPress={()=>{onIncrementProduct(product)}}/>
      </StyledCartButtons>
    </ProductDetailContainer>
    </Container>
  );
};

