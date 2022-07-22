import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import mainReducers from "./redux/reducers/mainReducer"
import { Provider } from 'react-redux';
import { configureStore as createStore } from "@reduxjs/toolkit"
import Events from './screens/Events' 

export default function App() {
  const reduxStore = createStore({ reducer: mainReducers })
  return (
    <Provider store={reduxStore}>
      <View style={styles.container}>
        <Text>hooola hola hola</Text>
        <Events/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
