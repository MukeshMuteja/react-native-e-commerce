import React, { PropsWithChildren, ReactNode, ReactPropTypes } from "react"
import { TextProps, TextStyle } from "react-native/types";
import styled from "styled-components/native";

const StyledText = styled.Text`
  color: #000000;
  font-size: 12px;
`;

type TextWithProps = {
  children?: ReactNode;
  style?: TextStyle;
  fontSize?: number;
  numberOfLines?: number;
  props?: TextProps;
  testID?: string
};

/* The code is defining a functional component called `Text` that takes in several props: `children`,
`style`, `props`, `testID`, and `numberOfLines`. */
export const Text = ({ children, style, props,testID, numberOfLines = 2 }: TextWithProps) => {
  return <StyledText testID={testID} numberOfLines={numberOfLines} style={style} {...props}>{children}</StyledText>;
}