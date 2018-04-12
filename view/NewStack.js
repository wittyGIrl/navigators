
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

//展示的页面
//import leftTab from './leftTab';
import newsList from './newsList';
import BasicInfo from './BasicInfo';

export default Stack = StackNavigator({
    //每一个页面的配置
    newsList: {
        screen: newsList
    },
    BasicInfo: {
        screen: BasicInfo
    }
});//设置导航
