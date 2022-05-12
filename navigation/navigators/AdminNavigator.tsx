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
import ServiceFormComponent from "../../components/ServiceComponent/ServiceFormComponent";
import DonationFormComponent from "../../components/DonationComponent/DonationFormComponent";
import CovidAppealComponent from "../../components/DonationComponent/CovidAppealComponent";
import CheckComponent from "../../components/NewsComponent/CheckComponent";
import NewsDashboardScreen from "../../screens/HomeScreen/AdminScreen/NewsDashboardScreen";



const AdminStack = createStackNavigator();

export default function  AdminNavigator() {
  const navigation = useNavigation();
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen
        name="News Dashbaord"
        component={NewsDashboardScreen}
        options={{
          headerBackTitleVisible: false,
        }} 
    />
    </AdminStack.Navigator>
  );
}
