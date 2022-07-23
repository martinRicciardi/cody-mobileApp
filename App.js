import { StatusBar, LogBox, StyleSheet, Text, View } from 'react-native';
import mainReducer from "./redux/reducers/mainReducer"
import { Provider } from 'react-redux';
import { configureStore as createStore } from "@reduxjs/toolkit"
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/Tabs';

export default function App() {

  const store = createStore({ reducer: mainReducer });
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}
