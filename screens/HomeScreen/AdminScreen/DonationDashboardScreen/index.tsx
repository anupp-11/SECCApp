import { useNavigation } from '@react-navigation/native';
import React, { useEffect }  from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  FlatList,
} from 'react-native';
import styles from './styles';
import { FAB } from 'react-native-paper';
import { theme } from '../../../../components/LoginComponents/theme';
import NewsListComponent from '../../../../components/NewsComponent/NewsListComponent';
import { getNews } from '../../../../service/NewsService';
import Paragraph from '../../../../components/LoginComponents/Paragraph';
import AppProgressBar from '../../../../components/ProgressBar';


const DonationScreen = () => {
  const navigation = useNavigation();

  const [news, setNews] = React.useState([]);
  const [firstNews, setFirstNews] = React.useState("");
  const [otherNews, setOtherNews] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setIsProcessing(true);
        const response = await getNews();
        setNews(response);
        setIsProcessing(false);
      } catch (error) {
        setIsProcessing(false);
        console.log(error);
      }
    }

    //fetchMyAPI();
  }, []);


  const renderItem = ({ item }) => <NewsListComponent news={item}/>;


  if(isProcessing){
    return(
      <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <AppProgressBar />
      </View>
    )}
    
  else{
    if(news.length > 0){
      return (
        <View style={styles.container}>
           <FAB
              style={styles.fab}
              small
              theme={{colors:{accent:theme.colors.primary}}}
              icon="plus"
              onPress={() => navigation.navigate("Donation Form")}
            />
            <View>
            <FlatList
              initialNumToRender={8}
              showsVerticalScrollIndicator={false}
              data={news}
              renderItem={renderItem}
              horizontal={false}
              style={{
                width: "100%",
                marginTop: 10,
              }}
            />  
            </View>
          
          
        </View>
      );
    }else{
      return(
        <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
             <FAB
              style={styles.fab}
              small
              theme={{colors:{accent:theme.colors.primary}}}
              icon="plus"
              onPress={() => navigation.navigate("Donation Form")}
            />
            <Paragraph style={{textAlign:'center'}}>
              No Donations Found
            </Paragraph>
        </View>
      );
    }
  }
  
};

export default DonationScreen;
