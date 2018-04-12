/**************
****导航界面****
***************/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    NavigationActions
} from 'react-navigation';

import MainPage from './view/MainPage';
import Personality from './view/personality';
import newsList from './view/newsList';
import BasicInfo from './view/BasicInfo';
import leftTab from './view/leftTab';
import details from './view/details';

const TabNav = TabNavigator({
    MainPage: {
      screen: MainPage,
      navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon:({tintColor}) => (
        <Image source={require('./img/chat.png')}
      style={{width:60,height:60}}/>),
    })
    },
    newsList: {
        screen: newsList,
        navigationOptions: ({ navigation }) => ({
        tabBarLabel: '控制面板',
        tabBarIcon:({tintColor}) => (
          <Image source={require('./img/chat.png')}
        style={{width:60,height:60}}/>),
      })
    },
  },{
  tabBarPosition:'bottom',
  showIcon:true,

});

const  RouteConfigs = {
  Root: {
    screen: TabNav,
  },
  BasicInfo: {
    screen: BasicInfo,
    navigationOptions: {
      title: '待办任务',
    },
  },
  newsList: {
    screen: newsList,
    navigationOptions: {
      title: '信息'
    },
  },
  leftTab:{
    screen: leftTab,
    navigationOptions:  {
      title: '侧滑'
    },
  },
  details:{
    screen: details,
    navigationOptions:  {
      title: '详细'
    },
  },
};
const Navigator = StackNavigator(RouteConfigs);
export default class Navigators extends Component{
  render(){
    return(
      <Navigator/>
    );
  }
}
