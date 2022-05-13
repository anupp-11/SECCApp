import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';

const FollowUsScreen = () => {
  const navigation = useNavigation();

  //onPress function open the link in the browser
  const openLink = (link: string) => {
    Linking.openURL(link);
  };
  

  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={()=> Linking.openURL("https://www.facebook.com/secc.sydney")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/facebook.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=> Linking.openURL("https://instagram.com/secc.sydney?igshid=YmMyMTA2M2Y=")}>
        <View style={styles.cardBody}>
          <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/instagram.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Instagram
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=> Linking.openURL("https://www.tiktok.com/@seccsydney")}>
        <View style={styles.cardBody}>
        <Image
          style={{height:50,width:50}}
          source={require('../../../assets/icons/tiktok.png')}
        />
        </View>  
        <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
          Tiktok
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=> Linking.openURL("https://www.linkedin.com/company/south-eastern-community-connect-eastlakes")}>
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
