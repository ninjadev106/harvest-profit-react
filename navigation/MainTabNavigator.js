import React from 'react';
import { Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FieldsScreen from '../screens/FieldsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Fields: {
      screen: FieldsScreen,
    },
    Settings: {
      screen: SettingsScreen,
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
            iconName = "app_icon.png";
            break;
          case 'Links':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-link${focused ? '' : '-outline'}`
            //   : 'md-link';
            iconName = "current_doller_btn.png";
            break;
          case 'Fields':
            iconName = "fields.png";
            break;
          case 'Settings':
            // iconName = Platform.OS === 'ios'
            //   ? `ios-options${focused ? '' : '-outline'}`
            //   : 'md-options';
            iconName = "setting_btn.png";
        }
        return (
          <Image
            source={require('../assets/images/current_doller_btn.png')} 
            style={{width: 10, height: 10}}           
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
