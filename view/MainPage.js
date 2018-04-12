import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
  PanResponder,
  Image
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
import newsList from './newsList';
import BasicInfo from './BasicInfo';

export default class MainPage extends Component{
  static navigationOptions = {
    title: 'WITBPM',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
       <ScrollView>
         <Text style={{fontSize:40}}>任务中心</Text>
           <TouchableHighlight onPress={()=> navigate('BasicInfo','')}>
             <Text style={styles.textStyle}><Image source={require('../img/help.png')} style={{width:60,height:60}}/>待办任务</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>已办任务</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>草稿箱</Text>
           </TouchableHighlight>
         <Text style={{fontSize:40}}>流程中心</Text>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>流程申请</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}> 我提交的流程</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>我参与的流程</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>我委托的流程</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>我代理的流程</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>其他可访问的流程</Text>
           </TouchableHighlight>
         <Text style={{fontSize:40}}>个人管理</Text>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>个人信息</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>修改密码</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>个性化</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>代理设置</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={()=>{console.log(1);}}>
             <Text style={styles.textStyle}>个人信息</Text>
           </TouchableHighlight>
       </ScrollView>
    );
  }
};

const styles=StyleSheet.create({
  textStyle:{
    fontSize:20,
    padding:10,
    marginBottom:5,
    color:'white',
    backgroundColor:'#887766'
  }
});
