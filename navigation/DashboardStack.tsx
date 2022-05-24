import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen/index';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import BottomTabNav from './BottomTabNav';
import OtpScreen from '../screens/ForgotPasswordScreen/OtpScreen';
import ChangePasswordScreen from '../screens/ForgotPasswordScreen/ChangePasswordScreen';

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled:false}} >
      <Stack.Screen component={DashboardScreen} name="Dashboard" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
      <Stack.Screen component={OtpScreen} name="OtpScreen" />
      <Stack.Screen component={ChangePasswordScreen} name="ChangePassword" />
      <Stack.Screen
        component={BottomTabNav}
        name="Home"
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
