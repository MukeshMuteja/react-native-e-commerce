/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import Navigator from '../navigator';
import {store} from '../store'

function App(): JSX.Element {

  return (
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}

export default App;
