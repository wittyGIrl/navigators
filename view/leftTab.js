import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

class leftTab extends React.Component {
    static navigationOptions = {
        title:'通知',
        drawerLabel: '通知',

    };
    render() {
        return (
             <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});
export default leftTab;
