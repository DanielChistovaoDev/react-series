import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  LoginPage  from './src/pages/LoginPage';

const AppNavigator  = createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'ProjetoFlix'
    }
  },
  
}, {
  defaultNavigationOptions: {
    title: 'Series',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30
    }
  }
});


const AppContainer =  createAppContainer(AppNavigator);

export default AppContainer;