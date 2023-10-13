import React from 'react';
import { TouchableOpacity, Text, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px 20px;
  margin: 0px 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 14px;
`;

type ButtonPropsType = {
  text: string;
  onPress: () => void;
  style?: ViewProps;
  testID?: string;
}

/**
 * React component that renders a button with customizable text,
 * style, and onPress event handler.
 * @param {ButtonPropsType}  - - `text`: The text to be displayed on the button.
 * @returns The `Button` component is being returned.
 */
export const Button = ({ text, onPress, style, testID="button-component"}: ButtonPropsType) => {
  return (
    <ButtonContainer style={style} testID={testID} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};


