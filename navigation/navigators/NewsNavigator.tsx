import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import NewsScreen from "../../screens/HomeScreen/NewsScreen";

const NewsStack = createStackNavigator();

export default function NewsNavigator() {
  const navigation = useNavigation();
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerBackTitleVisible: false,
        }} 
      />
      <NewsStack.Screen
        name="News Detail"
        component={NewsComponent}
        options={{
          headerBackTitleVisible: false,
        }} 
      />
      
    </NewsStack.Navigator>
  );
}
