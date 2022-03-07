import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from './Screens/Details';
import Home from './Screens/Home';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
};

const StackNavigator = createStackNavigator({
  Home : {
    screen : Home,
    navigationOptions : {
      headerTitle : <Text style = {{
        fontSize : 50,
        color : '#00ADB5',
        textAlign : 'center',
        fontFamily : 'bradley hand'
      }}> Home </Text>,
      headerTitleAlign : 'center',
      headerStyle : {
        backgroundColor : '#222831',
      }
    }
  },

  Details : {
    screen : Details,
    navigationOptions : {
      headerTitle : <Text style = {{
        fontSize : 50,
        color : '#00ADB5',
        textAlign : 'center',
        fontFamily : 'bradley hand'
      }}> Details </Text>,
      headerTitleAlign : 'center',
      headerStyle : {
        backgroundColor : '#222831',
      }
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);