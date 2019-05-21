import React from 'react';
import { Text, View } from 'react-native';

class MinePage extends  React.Component{
    static navigationOptions = {
        drawerLabel:'Mine'
    }

    render(): React.ReactNode {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems: 'center'} }>
                <Text>Mine</Text>
            </View>
        );
    }
}

export default MinePage;
