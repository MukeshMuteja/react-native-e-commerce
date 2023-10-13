import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from './';

describe('Text Component', () => {
  it('renders children and style correctly', () => {
    const inputText = "Hello, World!"
    const { getByText } = render(
      <Text style={{ fontSize: 16 }}>{inputText}</Text>
    );
    const textElement = getByText(inputText);
    expect(textElement).toBeDefined();
    expect(textElement.props.style[1].fontSize).toBe(16)
  });

  it('renders with default number of lines', () => {
      const inputText = "Long text goes here"
    const { getByText } = render(<Text>{inputText}</Text>);
    const textElement = getByText(inputText);
    expect(textElement).toBeTruthy();
    expect(textElement.props.numberOfLines).toBe(2)
  });

  it('renders with custom number of lines', () => {
    const inputText = "Very long text goes here"
    const { getByText } = render(<Text numberOfLines={3}>{inputText}</Text>);
    const textElement = getByText(inputText);
    expect(textElement).toBeTruthy();
    expect(textElement.props.numberOfLines).toBe(3)
  });

});