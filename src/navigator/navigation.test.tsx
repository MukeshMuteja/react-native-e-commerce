import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import HomeNavigator from './';
import configureStore from 'redux-mock-store'; 
import { Provider } from 'react-redux';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const mockStore = configureStore([]);
const store = mockStore({})

describe('HomeNavigator', () => {
  it('should render the HomeNavigator component', () => {
    const { getAllByText, getByText  } = render(<Provider store={store}>
                                  <HomeNavigator />
                                </Provider>);
    const matchingHomeScreenElements = getAllByText('Home Screen');
    expect(matchingHomeScreenElements.length).toBe(2);
    act(() => {
    fireEvent.press(getByText('Cart Screen'));
    });
    const matchingCartScreenElements = getAllByText('Cart Screen');
    expect(matchingCartScreenElements.length).toBe(2);
  });
});