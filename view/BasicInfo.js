import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

export default class BasicInfo extends Component{
  static navigationOptions = {
    title: 'WITBPM',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>BasicInfo</Text>
      </View>
    );
  }
}
