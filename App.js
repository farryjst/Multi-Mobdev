import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Component: ComponentScreen,
  Friend: FriendScreen,
  Student: StudentScreen,
  Home: HomeScreen,
  Counter: CounterScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'App Mobile Programming',
      headerStyle: {
        backgroundColor: 'grey'
      },
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
