import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/LoginComponents/Button";
import { getUserFromDevice } from "../../service/AccountService";
import { isExpired, decodeToken } from "react-jwt";
import jwt_decode from "jwt-decode";

export default class HomeScreen extends React.Component {
  constructor(props: any, private backHandler: BackHandler) {
    super(props);

    this.state = {
      admin: false,
      userName: "User",
    };
  }
  logout = async () => {
    var data = {
      id: "",
      name: "",
      userName: "",
      jwtToken: "",
      email: "",
    };
    // const resp = await saveUserToDevice(data);
    // this.props.navigation.navigate('Dashboard');
  };
  backAction = () => {
    if (this.props.navigation.canGoBack()) {
      debugger;
    } else {
      debugger;
      Alert.alert("Hold on!", "Are you sure you want to Signout?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => this.logout() },
      ]);
      return true;
    }
  };
  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);

    const user = await getUserFromDevice();
    if (user?.jwtToken) {
      const token = user.jwtToken;
      const decoded = jwt_decode(token);
      if(decoded){
        if (decoded?.userType == "ADMIN") {
          this.setState({ admin: true });
        } 
      }
      else {
        this.setState({ admin: false });
      }
      
    }

    this.setState({ userName: user.name });
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("News")}
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../../assets/icons/news.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              News
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Services")}
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/icons/service.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Services
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Support Us")}
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/icons/support.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Support Us
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Contact Us")}
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/icons/contact-mail.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Follow Us")}
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/icons/follow.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Follow Us
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              this.props.navigation.navigate("The People's Pantry")
            }
          >
            <View style={styles.cardBody}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/icons/pantry.png")}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              The People's Pantry
            </Text>
          </TouchableOpacity>

          {/* Create a botton if admin is true */}
          {this.state.admin && (
            <View style={{ marginTop: 10 }}>
              <Button
                mode="contained"
                onPress={() =>
                  this.props.navigation.navigate("Admin Dashboard")
                }
              >
                View Admin Dashboard
              </Button>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
