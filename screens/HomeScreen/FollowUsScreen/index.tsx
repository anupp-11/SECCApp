import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const FollowUsScreen = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/facebook.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Facebook
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/instagram.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Instagram
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/tiktok.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Tiktok
        </Text>
      </View>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ContactUs")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/linkedin.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          LinkedIn
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default FollowUsScreen;
