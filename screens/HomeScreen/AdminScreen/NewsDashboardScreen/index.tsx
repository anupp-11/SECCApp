import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect }  from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import { FAB } from 'react-native-paper';
import { theme } from '../../../../components/LoginComponents/theme';
import { getNews } from '../../../../service/NewsService';
import Paragraph from '../../../../components/LoginComponents/Paragraph';
import AppProgressBar from '../../../../components/ProgressBar';
import NewsListAdminComponent from '../../../../components/NewsComponent/NewsListAdminComponent';
import { EventRegister } from "react-native-event-listeners";


const NewsDashboardScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  const [news, setNews] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setIsProcessing(true);
        const response = await getNews();
        setNews(response.reverse());
        EventRegister.addEventListener("newsUpdated", async (data) => {
          setIsProcessing(true);
          const response = await getNews();
          setNews(response.reverse());
          setIsProcessing(false);
        });
        setIsProcessing(false);
      } catch (error) {
        setIsProcessing(false);
        console.log(error);
      }
    }
    fetchMyAPI();
  }, []);


  const renderItem = ({ item }) => <NewsListAdminComponent news={item}/>;


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
              onPress={() => navigation.navigate("News Form")}
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
              onPress={() => navigation.navigate("News Form")}
            />
            <Paragraph style={{textAlign:'center'}}>
              No News Found
            </Paragraph>
        </View>
      );
    }
  }
  
};

export default NewsDashboardScreen;
