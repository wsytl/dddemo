
import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator
    ,createAppContainer
    ,createStackNavigator
} from 'react-navigation'
import HomePage from './home/homepage'
import MinePage from './mine/minepage'

import {isObject} from './common/ClassType'


const TabImgHome = require('./resource/tabbarImage/tabbar_info.png');
const TabImgHome_Sel = require('./resource/tabbarImage/tabbar_selected_info.png');
const TabImgMine = require('./resource/tabbarImage/tabbar_mine.png');
const TabImgMine_Sel = require('./resource/tabbarImage/tabbar_selected_mine.png');

const HomeStack = createStackNavigator({
    HomePage:{
        screen:HomePage,
    }
},{
    defaultNavigationOptions:{
        header:null
    }
})
const MineStack = createStackNavigator({
    MinePage:{
        screen:MinePage
    }
},{
    defaultNavigationOptions:{
        header:null
    }
})

const TabNavigator = createBottomTabNavigator(
    {
        Home:{
            screen:HomeStack,
            navigationOptions:(navigation) => TabOptions(navigation, '计算', TabImgHome, TabImgHome_Sel, ''),
        },
        Mine:{
            screen:MineStack,
            navigationOptions:(navigation) => TabOptions(navigation, '我的', TabImgMine, TabImgMine_Sel, ''),
        }
},{
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const TabOptions = (navigation, tabBarTitle, normalImage, selectedImage, navTitle) => {
    // console.log(navigation);
    let {state} = navigation.navigation
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({focused}) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 20, alignSelf: 'center'};

    // header的style
    const headerStyle = {backgroundColor: '#fff'};

    let {params} = state
    let boolValue = true
    if (isObject(params)){
        if (isObject(params.tabBarVisible)){
            if (params.tabBarVisible){
                boolValue = true
            }else {
                boolValue = false
            }
        }else {
            boolValue = true
        }
    }else {
        boolValue = true
    }
    const tabBarVisible = boolValue
    return {tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle, tabBarVisible};
};


const AppContainer = createAppContainer(TabNavigator);


// export default AppContainer;
module.exports = AppContainer
