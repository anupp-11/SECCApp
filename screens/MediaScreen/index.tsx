import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Background from '../../components/LoginComponents/Background';

import styles from './styles';



const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <Background >

      <Text>
        Welcome to MediaScreen
      </Text>
      {/* <ScrollView>
        <CarouselCards />
        <ScrollView>
          <FlatList
            data={categories.category}
            renderItem={({item}) => <HomeCategory category={item} />}
          />
        </ScrollView>
        <ScrollView>
          <Text style={styles.root}>All Products</Text>
          <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </ScrollView> */}
    </Background>
  );
};

export default HomeScreen;
