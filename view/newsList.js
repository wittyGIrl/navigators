import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import MainPage from './MainPage';
import BasicInfo from './BasicInfo';
import leftTab from './leftTab';

export default class newsList extends Component{
  static navigationOptions = {
    title: 'WITBPM',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>

      <Button
      //第一个参数为跳转到的界面，第二个为传入的参数
        onPress = {()=> navigate('leftTab',{name:'Jim'})}
        title = "返回个人中心"/>
      <Text>这是第二个界面</Text>
      </View>
    );
  }
}
