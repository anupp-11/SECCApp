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
import styles from './styles';
import { FAB } from 'react-native-paper';
import { theme } from '../../../../components/LoginComponents/theme';
import NewsListComponent from '../../../../components/NewsComponent/NewsListComponent';


const NewsDashboardScreen = () => {
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

  const renderItem = ({ item }) => <NewsListComponent news={item}/>;


  
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
};

export default NewsDashboardScreen;
