import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../constants/Colors";

export default function DefaultHeader({ headerTitle, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          
        <Ionicons style={styles.left}  name="arrow-back" />
        <Text style={styles.center}>{headerTitle}</Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  
    backgroundColor: PRIMARY_COLOR,
    height: 80,
  
       
      
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
  },
  header:{
    display: "flex",
     flexDirection: "row",
     
      flex:1,
     
      alignItems: 'center'
  },
  left:{
      
      fontSize: 25,
      marginLeft: 10,
      color: 'white'
  },
  center:{
   
    fontSize: 25,
      marginLeft: 30,
      color: 'white'
  }
});
