import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/**
 * The `Loader` function returns a React component that displays an activity indicator inside a
 * container.
 * @returns The Loader component is returning a Container component that contains an ActivityIndicator
 * component with a size of "large" and a testID of "activity-indicator".
 */
export const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" testID="activity-indicator"/>
    </Container>
  );
};

