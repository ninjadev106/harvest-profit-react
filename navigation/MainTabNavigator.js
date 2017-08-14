import React from 'react';
import { Image,Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FieldScreen from '../screens/FieldScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Fields: {
      screen: FieldScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-information-circle${focused ? '' : '-outline'}`
            //   : 'md-information-circle';
            iconName = '';
            break;
          case 'Links':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-link${focused ? '' : '-outline'}`
            //   : 'md-link';
            iconName = '';
            break;
          case 'Settings':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-options${focused ? '' : '-outline'}`
            //   : 'md-options';
            iconName = '';
              break;
          case 'Fields':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-options${focused ? '' : '-outline'}`
            //   : 'md-options';
            iconName = '';
        }
        return (
          // <Ionicons
          //   name={iconName}
          //   size={28}
          //   style={{ marginBottom: -3 }}
          //   color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          // />
          <Image source={ require('../assets/images/robot-prod.png') } style={{width:20, height:20}} />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
