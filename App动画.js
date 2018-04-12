/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    NavigationActions
} from 'react-navigation';
//展示的页面
import MainPage from './view/MainPage';
import Personality from './view/personality';
import newsList from './view/newsList';
import BasicInfo from './view/BasicInfo';
import leftTab from './view/leftTab';
import details from './view/details';
import {Navigator} from './view/navigator';
export default class App extends Component {
  // 构造
  constructor(props) {
      super(props);
      // 初始状态
      this.state = {
          fadeOutOpacity: new Animated.Value(0),
      };
  }
  render() {
      return (
        <Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
            style = {{flex: 1,alignItems: 'center',justifyContent: 'center',
                    opacity: this.state.fadeOutOpacity,}}>
            <Image source = {require('./img/primary.png')}
                style = {{width: 400,height: 400}}/>
        </Animated.View >
      );
  }
  startAnimation() {
      this.state.fadeOutOpacity.setValue(1);
      Animated.timing(this.state.fadeOutOpacity, {
          toValue: 0,
          duration: 3000,
      }).start();
  }
  componentDidMount() {
      this.startAnimation();
  }
}
