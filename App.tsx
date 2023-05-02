import { Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';

import InitialNavigation from './navigation/InitialNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <InitialNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;