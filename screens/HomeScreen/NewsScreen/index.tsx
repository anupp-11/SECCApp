import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-paper';
import NewsListComponent from '../../../components/NewsComponent/NewsListComponent';

import styles from './styles';

const NewsScreen = () => {
  const navigation = useNavigation();

  const [news, setNews] = React.useState([
    {
      id: '1',
      title: 'Five tips for staying flood-aware in NSW',
      date: 'Mar 9, 2022',
      image: 'https://picsum.photos/700',
    },
    {
      id: '2',
      title: 'Five tips for staying flood-aware in NSW',
      date: 'Mar 9, 2022',
      image: 'https://picsum.photos/800',
    }
  ]);
  const [firstNews, setFirstNews] = React.useState("");
  const [otherNews, setOtherNews] = React.useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      // setFirstNews(news[0]);
      // //filter out the first news
      // setOtherNews(news.filter(news => news.id !== firstNews.id));
    }

    fetchMyAPI();
  }, [])

  function dialCall(number:any){
  };


  const handelOnPress=()=>{
    navigation.navigate("News Detail", {
      news: news,
    }); 
  }

  const headerComponent = () =>{
    return(
      <Card onPress={handelOnPress} style={{marginBottom:10}}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title="Five tips for staying flood-aware in NSW" subtitle="Mar 9, 2022"/>
      </Card>
    );
  };
  const renderItem = ({ item }) => <NewsListComponent news={item}/>;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent = {headerComponent}
        initialNumToRender={8}
        showsVerticalScrollIndicator={false}
        data={news}
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
};

export default NewsScreen;
