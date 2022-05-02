import { Ionicons } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { Platform, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import AccountScreen from "../../screens/AccountScreen";
import { AccountTabParamList } from "../../types";


const AccountStack = createStackNavigator<AccountTabParamList>();

export default function AccountNavigator() {
  const navigation = useNavigation();
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{ name: "Products" }]
                        }));
                     
                  }}/>
                  <Appbar.Content title="Store Info" />
                  
                </Appbar.Header>
              );

            }else{
              return(
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                 
                  <Appbar.Content title="Store Info" />
                  
                </Appbar.Header>
              );
            }

           
          },
        
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />
    </AccountStack.Navigator>
  );
}
