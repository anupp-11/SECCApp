
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import ExploreScreen from '../screens/ExploreScreen';
import MediaScreen from '../screens/MediaScreen';
import { theme } from '../components/LoginComponents/theme';
import ProfileNavigator from './navigators/ProfileNavigator';
import HomeNavigator from './navigators/HomeNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarShowLabel: false
      }}
      >
      <Tab.Screen
        component={ HomeNavigator }
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />

       <Tab.Screen
        name="Events"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="calendar" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MediaScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-circle" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={20} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};

//make this component available to the app
export default BottomTabNav;
