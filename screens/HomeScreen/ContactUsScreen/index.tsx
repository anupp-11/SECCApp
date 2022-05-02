import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import styles from './styles';

const ContactUsScreen = () => {
  const navigation = useNavigation();

  function dialCall(number:any){
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:'+number;
    }
    else {
      phoneNumber = 'telprompt:'+number;
    }
 
    Linking.openURL(phoneNumber);
  };

  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titletext}>SECC Community Hub</Text>
        <Text style={styles.bodytext}>1007 Botany Road {"\n"}Mascot (cnr Coward St){"\n"}</Text>
        <TouchableOpacity onPress={()=> dialCall("0279030607")} >
          <Text style={styles.linktext}>T (02) 7903 0607 (Mascot)</Text>
        </TouchableOpacity>
        
        <Text style={styles.bodytext}>{"\n"}Monday to Thursday 9:30AM to 3PM{"\n"}Friday 9:30AM to 2:30PM</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginVertical: 20,
        }}
      />
       <View>
        <Text style={styles.titletext}>SECC Head Office</Text>
        <Text style={styles.bodytext}>21 Vernon Ave{"\n"}Eastlakes 2018{"\n"}</Text>
        <TouchableOpacity onPress={()=> dialCall("0283382018")} >
          <Text style={styles.linktext}>T (02) 8338 2018 (Eastlakes)</Text>
        </TouchableOpacity>    
        <Text style={styles.bodytext}>{"\n"}Monday to Friday 9:30AM to 4PM</Text>
      </View>
      
    </View>
  );
};

export default ContactUsScreen;
