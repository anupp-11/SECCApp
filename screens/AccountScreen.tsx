import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getAccount } from "../service/AccountService";
import { ScrollView } from "react-native-gesture-handler";
import { Account } from "../service/AccountService";
import AppProgressBar from "../components/ProgressBar";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Divider } from "react-native-paper";
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { generateAddressString } from "../service/Helpers";

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProcessing: true,
      hasErrors: false,
      errorMessage: "",
      account: {},
    };
  }

  componentDidMount = async () => {
    try {
      var account = (await getAccount()) as Account;
      console.log(account);
      this.setState({
        account: account,
      });
    } catch (error) {
      this.setState({ hasErrors: true, errorMessage: error });
    }

    this.setState({ isProcessing: false });
  };

  render() {
    if (this.state.isProcessing) {
      return (
        <View style={{ flex: 1,  display: 'flex', alignItems:'center', justifyContent:'center' }}>
          <AppProgressBar />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
         <Card containerStyle={{padding: 0, height: 170, margin: 5 ,}}>
           <View style={{display: "flex", padding: 10}}>
            <Image source={{uri: this.state.account.logoUrl}} 
            style={{height: 150, resizeMode:  "center"}}  />
            
            </View>
           
            
         </Card>

         <Card containerStyle={{margin: 5}}>
           <View style={styles.titleContainer}>
             <Ionicons size={25} name="home-outline" /> 
             <Text style={styles.title}>{this.state.account.name}</Text>
           </View>
           <View style={styles.titleContainer}>
             <Ionicons size={25} name="mail-outline" /> 
             <Text style={styles.title}>{this.state.account.email}</Text>
           </View>
           <View style={styles.titleContainer}>
             <Ionicons size={25} name="call-outline" /> 
             <Text style={styles.title}>{this.state.account.phoneNumber}</Text>
           </View>
           <View style={styles.titleContainer}>
             <Ionicons size={25} name="location-outline" /> 
             <Text style={styles.title}>{generateAddressString(this.state.account.billingAddress)}</Text>
           </View>
         </Card>
           
            
             
           
         
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingLeft: 10, fontSize: 15
  },
  titleContainer:{
    display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 10
  }
});
