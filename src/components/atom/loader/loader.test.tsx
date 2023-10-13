import React from 'react';
import { render } from '@testing-library/react-native';
import { Loader } from './';  

describe('Loader Component', () => {
  it('should render ActivityIndicator', () => {
    const { getByTestId } = render(<Loader />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});
