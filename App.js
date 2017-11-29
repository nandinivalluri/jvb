import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './App/WorkoutInputs/Input';
import Login from './App/WorkoutInputs/Login';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
	Login: {screen: Login},
	Input: {screen: Input},

});

export default class App extends React.Component {
  render() {
    return (
      <View>   
        <Login />
      </View>
    );
  }
}




