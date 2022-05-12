import React from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Button,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';
import navigation from '../../navigation';



// create a component
const ProfileScreen = () => {
  const navigation = useNavigation();

  const logout = async ()=>{
    // var data = {
    //   "id": "",
    //   "name": "",
    //   "userName": "",
    //   "jwtToken": ""
    // }
    // const resp = await saveUserToDevice(data);
    console.log("Logout Pressed");
    navigation.navigate("Dashboard");

  }
  const onLogout = () => {
    Alert.alert("Hold on!", "Are you sure you want to Signout?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => logout() }
    ]);
  }


  

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={{
            uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
          }}
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
          }]}>Full Name</Title>
          <Caption style={styles.caption}>username</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>Address, Country</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>+40-234234234</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>user@email.com</Text>
      </View>
    </View>
    <View
      style={{
      borderBottomColor: theme.colors.surface,
      borderBottomWidth: 3,
      marginHorizontal: 10,
      marginBottom: 10
      }}
    />


    <View style={styles.menuWrapper}>
      <Button mode='contained' style={{margin:10}} color={theme.colors.primary} onPress={onLogout}>Logout</Button>

  
    </View>
  </SafeAreaView>
  );
};

export default ProfileScreen;

