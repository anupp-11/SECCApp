import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const NewsListComponent = (props:any) => {

  const [news, setNews] = React.useState(props.news);

  const navigation = useNavigation();
  const handelOnPress=()=>{
    navigation.navigate("News Detail", {
      news: news,
    }); 
  }

  const LeftContent = () => <Card.Cover style={{height:50,width:48}} source={{uri:`data:image/jpeg;base64,${news.imageUrl}`}} />

  //function to return date from date and time
  function getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  return (
    <View style={{marginBottom:10}} >
      <Card onPress={handelOnPress}>
        <Card.Title title={news.title} subtitle={getDate(news.createdAt)} left={LeftContent}/>
      </Card>
    </View>
  );
};

export default NewsListComponent;
