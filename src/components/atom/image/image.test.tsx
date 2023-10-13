import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Image } from './'; 

const MOCK_IMAGE_URI = "https://example.com/some-image.jpg"
const DEFAULT_IMAGE = "../../../src/assests/default.png"

test('Image component renders correctly', () => {
  const { getByTestId } = render(
    <Image
      image={MOCK_IMAGE_URI}
      imageMode="cover"
      style={{ width: 200, height: 200 }}
    />
  );
  const imageComponent = getByTestId('image-component');
  expect(imageComponent).toBeTruthy();
  expect(imageComponent.props.source.uri).toEqual(MOCK_IMAGE_URI)
});

test('Image component handles undefined image', () => {
    const { getByTestId } = render(<Image image={undefined}/>); 
    const imageComponent = getByTestId('image-component');
    expect(imageComponent.props.source.uri).toBeUndefined()
    expect(imageComponent.props.defaultSource).toMatchObject({
        testUri: DEFAULT_IMAGE,
      });
  });



  
  
  
  
  
  
  