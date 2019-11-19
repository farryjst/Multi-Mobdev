import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WisataScreen from './screens/WisataScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Wisata: WisataScreen,
  Home: HomeScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'FINAL PROJECT',
      headerStyle: {
        backgroundColor: '#FF8700',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20
      }
    }
  });

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
