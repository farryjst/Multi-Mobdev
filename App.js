import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WisataScreen from './screens/WisataScreen';
import GaleryScreen from './screens/GaleryScreen';
import ComponentScreen from './screens/ComponentScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Wisata: WisataScreen,
  Home: HomeScreen,
  Galery: GaleryScreen,
  Component: ComponentScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: ' FINAL PROJECT',
      headerStyle: {
        backgroundColor: '#FF8700',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        padding: 20
      }
    }
  });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);

