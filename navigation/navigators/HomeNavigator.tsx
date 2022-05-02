import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen/index";
import ContactUsScreen from "../../screens/HomeScreen/ContactUsScreen";
import FollowUsScreen from "../../screens/HomeScreen/FollowUsScreen";
import NewsScreen from "../../screens/HomeScreen/NewsScreen";
import NewsNavigator from "./NewsNavigator";
import ServiceNavigator from "./ServiceNavigator";
import PeoplePantryScreen from "../../screens/HomeScreen/PeoplePantryScreen";
import SupportUsScreen from "../../screens/HomeScreen/SupportUsScreen";
import AdminScreen from "../../screens/HomeScreen/AdminScreen";
import NewsFormComponent from "../../components/NewsComponent/NewsFormComponent";



const HomeStack = createStackNavigator();

export default function  HomeNavigator() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options = {{
            headerShown: false
          }}
      />

    <HomeStack.Screen
        name="Contact Us"
        component={ContactUsScreen}
        
        options={{
          headerBackTitleVisible: false,
        }} 
    />

    <HomeStack.Screen
        name="Follow Us"
        component={FollowUsScreen}
        options={{
          headerBackTitleVisible: false,
        }} 
    />
    <HomeStack.Screen
        name="News"
        component={NewsNavigator}
        options={{
          headerShown: false,
        }} 
    />
    <HomeStack.Screen
        name="Services"
        component={ServiceNavigator}
        options={{
          headerShown: false,
        }} 
    />
    <HomeStack.Screen
      name="The People's Pantry"
      component={PeoplePantryScreen}
      options={{
        headerBackTitleVisible: false,
      }} 
    />
    <HomeStack.Screen
      name="Support Us"
      component={SupportUsScreen}
      options={{
        headerBackTitleVisible: false,
      }} 
    />
    <HomeStack.Screen
      name="Admin Dashboard"
      component={AdminScreen}
      options={{
        headerBackTitleVisible: false,
      }} 
    />
    <HomeStack.Screen
      name="News Form"
      component={NewsFormComponent}
      options={{
        headerBackTitleVisible: false,
      }} 
    />
    </HomeStack.Navigator>
  );
}