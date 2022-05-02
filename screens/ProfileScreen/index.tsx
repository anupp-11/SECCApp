import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';



import Button from '../../components/LoginComponents/Button';

import styles from './styles';
import { theme } from '../../components/LoginComponents/theme';
import navigation from '../../navigation';



// create a component
const ProfileScreen = () => {
  const navigation = useNavigation();
  const _onSMRPressed = () => {
    navigation.navigate('SMRScreen');
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
          }]}>Saurab</Title>
          <Caption style={styles.caption}>@saurab</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>Dhapakhel, Lalitpur</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>+977-9867564548</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>rame@email.com</Text>
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
      

  
    </View>
  </SafeAreaView>
  );
};

export default ProfileScreen;

