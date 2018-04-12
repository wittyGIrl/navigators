/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
//展示的页面
import MainPage from './MainPage';
import Personality from './personality';
import newsList from './newsList';
import BasicInfo from './BasicInfo';
import leftTab from './leftTab';
import details from './details';

const TabNav = TabNavigator({
    MainPage: {
      screen: MainPage,
      navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon:({tintColor}) => (
        <Image source={require('../img/chat.png')}
      style={{width:60,height:60}}/>),
    })
    },
    newsList: {
        screen: newsList,
        navigationOptions: ({ navigation }) => ({
        tabBarLabel: '控制面板',
        tabBarIcon:({tintColor}) => (
          <Image source={require('../img/chat.png')}
        style={{width:60,height:60}}/>),
      })
    },
  },{
  tabBarPosition:'bottom',
  showIcon:true,

});

export default Navigator = StackNavigator({
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
});
