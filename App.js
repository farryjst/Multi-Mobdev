import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WisataScreen from './screens/WisataScreen';
import GaleryScreen from './screens/GaleryScreen';
import ComponentScreen from './screens/ComponentScreen';
import AboutScreen from './screens/AboutScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Wisata: WisataScreen,
  Home: HomeScreen,
  Galery: GaleryScreen,
  Component: ComponentScreen,
  About: AboutScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'FinalProject: MobDev',
      headerStyle: {
        backgroundColor: '#0E2F56',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
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

