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

  const LeftContent = () => <Card.Cover style={{height:50,width:48}} source={{ uri: news.image }} />

  
  return (
    <View style={{marginBottom:10}} >
      <Card onPress={handelOnPress}>
        <Card.Title title={news.title} subtitle={news.date} left={LeftContent}/>
      </Card>
    </View>
  );
};

export default NewsListComponent;
