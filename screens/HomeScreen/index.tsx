import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/LoginComponents/Button';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [admin, setAdmin] = React.useState(true);
  
  useEffect(() => {
    async function fetchMyAPI() {
      // setFirstNews(news[0]);
      // //filter out the first news
      // setOtherNews(news.filter(news => news.id !== firstNews.id));
    }

    fetchMyAPI();
  }, [])

  
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("News")}>
          <View  
            style={styles.cardBody}>
          <Image
            style={{height:40,width:40}}
            source={require('../../assets/icons/news.png')}
          />
          </View >  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            News
          </Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Services")}>
          <View style={styles.cardBody}>
            <Image
            style={{height:50,width:50}}
            source={require('../../assets/icons/service.png')}
          />
          </View>  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            Services
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Support Us")}>
          <View style={styles.cardBody}>
          <Image
            style={{height:50,width:50}}
            source={require('../../assets/icons/support.png')}
          />
          </View>  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            Support Us
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Contact Us")}>
          <View style={styles.cardBody}>
          <Image
            style={{height:50,width:50}}
            source={require('../../assets/icons/contact-mail.png')}
          />
          </View>  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            Contact Us
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Follow Us")}>
          <View style={styles.cardBody}>
          <Image
            style={{height:50,width:50}}
            source={require('../../assets/icons/follow.png')}
          />
          </View>  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            Follow Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("The People's Pantry")}>
          <View style={styles.cardBody}>
          <Image
            style={{height:50,width:50}}
            source={require('../../assets/icons/pantry.png')}
          />
          </View>  
          <Text style={{textAlign:'center',marginTop:10,fontWeight: '700',fontSize: 16,}}>
            The People's Pantry
          </Text>
        </TouchableOpacity>

        {/* Create a botton if admin is true */}
        <View style={{marginTop:10}}>
          {admin && (
            <Button mode="contained" onPress={() => navigation.navigate('Admin Dashboard')}>
              View Admin Dashboard
            </Button>
          )}
        </View>
      
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
