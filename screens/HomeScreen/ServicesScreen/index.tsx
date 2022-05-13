import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ServiceCardComponent from '../../../components/ServiceComponent/ServiceCardComponent';

import styles from './styles';

const ServicesScreen = () => {
  const navigation = useNavigation();

  const [services,setServices]=React.useState([
    {
      id:"1",
      name:"Families",
      image: require("../../../assets/images/familie.jpeg"),
    },
    {
      id:"2",
      name:"Young People",
      image:require("../../../assets/images/young.jpeg"),
    },
    {
      id:"3",
      name:"Seniors",
      image:require("../../../assets/images/Seniors.jpeg"),
    },
    {
      id:"4",
      name:"Community",
      image:require("../../../assets/images/community.jpeg"),
    }
  ]);
  
  const renderItem = ({ item }) => <ServiceCardComponent service={item}/>;

  return (
    <FlatList
      initialNumToRender={4}
      showsVerticalScrollIndicator={false}
      data={services}
      renderItem={renderItem}
      // keyExtractor={(item: Product, index) => index.toString()}
      columnWrapperStyle={{ justifyContent: "space-around" }}
      horizontal={false}
      numColumns={2}
      style={{
        width: "100%",
      }}
    />
   
  );
};

export default ServicesScreen;
