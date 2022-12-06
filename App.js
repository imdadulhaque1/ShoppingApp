/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './components/screen/Home';
import MyCart from './components/screen/MyCart';
import ProductInfo from './components/screen/ProductInfo';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Product " component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
