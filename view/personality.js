import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    NavigationActions
} from 'react-navigation';
import MainPage from './MainPage';
import BasicInfo from './BasicInfo';
import leftTab from './leftTab';

export default class personality extends Component{
  static navigationOptions = {
    title: 'WITBPM',
  };
  render(){
    return(
      <View>
        <Text>个人中心</Text>
      </View>
    );
  }
}
