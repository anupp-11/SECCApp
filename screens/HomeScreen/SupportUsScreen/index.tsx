import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  FlatList,
} from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

const SupportUsScreen = () => {
  const navigation = useNavigation();


  const handelOnPress=()=>{
    navigation.navigate("COVID-19 Appeal"); 
  }

  const headerComponent = () =>{
    return(
      <Card onPress={handelOnPress} style={{marginBottom:10}}>
        {/* <Card.Cover source={{uri:`data:image/jpeg;base64,${firstNews.imageUrl}`}} /> */}
        <Card.Title title="The SECC COVID-19 Appeal"/>
      </Card>
    );
  };
  const renderItem = ({ item }) => <NewsListComponent news={item}/>;
  return (
    <View style={styles.container}>
      <Card onPress={handelOnPress} style={{marginBottom:10}}>
        <Card.Cover source={require('../../../assets/images/thumb.jpeg')} />
        <Card.Title title="The SECC COVID-19 Appeal"/>
      </Card>
      {/* <FlatList
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
        /> */}
      
    </View>
  );
};

export default SupportUsScreen;
