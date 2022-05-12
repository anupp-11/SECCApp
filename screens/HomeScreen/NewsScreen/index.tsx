import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-paper';
import Paragraph from '../../../components/LoginComponents/Paragraph';
import NewsListComponent from '../../../components/NewsComponent/NewsListComponent';
import AppProgressBar from '../../../components/ProgressBar';
import { getNews } from '../../../service/NewsService';

import styles from './styles';

const NewsScreen = () => {
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
        if(response.length > 0){
          setNews(response.reverse());
          const first = response[0];
          setFirstNews(first);
          const other = response.filter(x => x.id !== first.id);
          setOtherNews(other);
          debugger;
          setIsProcessing(false);
        }else{
          setIsProcessing(false);
        }
        
       
      } catch (error) {
        setIsProcessing(false);
        debugger;
        console.log(error);
      }
      
    }

    fetchMyAPI();
  }, []);

  const handelOnPress=()=>{
    navigation.navigate("News Detail", {
      news: firstNews,
    }); 
  }

  //function to return date from date and time
  function getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }


  const headerComponent = () =>{
    return(
      <Card onPress={handelOnPress} style={{marginBottom:10}}>
        <Card.Cover source={{uri:`data:image/jpeg;base64,${firstNews.imageUrl}`}} />
        <Card.Title title={firstNews.title} subtitle={getDate(firstNews.createdAt)}/>
      </Card>
    );
  };
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
          <FlatList
            ListHeaderComponent = {headerComponent}
            initialNumToRender={8}
            showsVerticalScrollIndicator={false}
            data={otherNews}
            renderItem={renderItem}
            //keyExtractor={(item: Product, index) => index.toString()}
            horizontal={false}
            style={{
              width: "100%",
              marginTop: 10,
            }}
          />
        </View>
      );
    }else{
      return(
        <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Paragraph style={{textAlign:'center'}}>
              No News Found
            </Paragraph>
        </View>
      );
    }
  }
};

export default NewsScreen;
