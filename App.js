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
  Alert,
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
import Navigators from './navigators';

export default class App extends Component {
  // 构造
  constructor(props) {
      super(props);
      this.spinValue = new Animated.Value(0)
      // 初始状态
      this.state = {
          fadeOutOpacity: new Animated.Value(1000),
      };
  }
  componentDidMount () {
      //  this.spin()
      this.startAnimation();

  }
  spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
  render() {
    const spin = this.spinValue.interpolate({
             inputRange: [0, 1],
             outputRange: ['0deg', '360deg']
         })
      return (
        <Navigators/>
      /*  <Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
            style = {{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: this.state.fadeOutOpacity,
                      transform: [{rotate: spin}]}}>
            <Image source = {require('./img/primary.png')}/>
        </Animated.View>*/
      );
  }
  startAnimation() {
      this.state.fadeOutOpacity.setValue(1);
      Animated.timing(this.state.fadeOutOpacity, {
          toValue: 0,
          duration: 4000,
      }).start();
  }
}
