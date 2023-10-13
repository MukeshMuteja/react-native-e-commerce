import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { Button } from './'; 

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button text="Test Button" onPress={() => {}} />);
    
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles onPress event', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button text="Test Button" onPress={onPressMock} />);
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toBeCalled();
  });

});