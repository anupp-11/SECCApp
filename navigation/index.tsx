//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardStack from './DashboardStack';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={DashboardStack} name="RavisShop" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
