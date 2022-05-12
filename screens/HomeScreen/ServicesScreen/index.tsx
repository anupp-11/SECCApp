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
      image:"https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg",
      subServices:[
        {
          id:"1",
          name:"Smooch",
          image:"https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg",
        },
        {
          id:"2",
          name:"Education",
          image:"https://picsum.photos/800",
        }
      ]
    },
    {
      id:"2",
      name:"Young People",
      image:"https://images.pexels.com/photos/3063478/pexels-photo-3063478.jpeg",
      subServices:[
        {
          id:"1",
          name:"Smooch",
          image:"https://images.pexels.com/photos/3063478/pexels-photo-3063478.jpeg",
        },
        {
          id:"2",
          name:"Education",
          image:"https://picsum.photos/700",
        }
      ]
    },
    {
      id:"3",
      name:"Seniors",
      image:"https://images.pexels.com/photos/6838620/pexels-photo-6838620.jpeg",
      subServices:[
        {
          id:"1",
          name:"Smooch",
          image:"https://images.pexels.com/photos/6838620/pexels-photo-6838620.jpeg",
        },
        {
          id:"2",
          name:"Education",
          image:"https://images.pexels.com/photos/6838620/pexels-photo-6838620.jpeg",
        }
      ]
    },
    {
      id:"4",
      name:"Community",
      image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
      subServices:[
        {
          id:"1",
          name:"Smooch",
          image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
        },
        {
          id:"2",
          name:"Education",
          image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
        }
      ]
    },
    // {
    //   id:"5",
    //   name:"Events",
    //   image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
    //   subServices:[
    //     {
    //       id:"1",
    //       name:"Smooch",
    //       image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
    //     },
    //     {
    //       id:"2",
    //       name:"Education",
    //       image:"https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg",
    //     }
    //   ]
    // }
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
