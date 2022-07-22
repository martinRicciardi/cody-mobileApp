import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import mainReducers from "./redux/reducers/mainReducer"
import { Provider } from 'react-redux';
import { configureStore as createStore } from "@reduxjs/toolkit"
import Events from './screens/Events' 
import SignUp from './screens/SignUp';
import Store from './screens/Store';
import Products from './components/Products';
import Sidebar from './components/Sidebar';

export default function App() {
  const reduxStore = createStore({ reducer: mainReducers })
  return (
    <Provider store={reduxStore}>
      <View style={styles.container}>
        <Text>hooola hola hola</Text>
        {/* <Events/> */}
        {/* <Store/> */}
        {/* <SignUp/> */}
        <Products/>
        <Sidebar/>
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
