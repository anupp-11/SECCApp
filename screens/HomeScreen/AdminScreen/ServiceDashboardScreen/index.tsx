import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
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
import ServiceListComponent from '../../../../components/ServiceComponent/ServiceListComponent';
import { EventRegister } from 'react-native-event-listeners';


const ServiceDashboardScreen = () => {
  const navigation = useNavigation();

  const [news, setNews] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(false);

  useEffect(() => {
    // async function fetchMyAPI() {
    //   try {
    //     setIsProcessing(true);
    //     const response = await getNews();
    //     setNews(response.reverse());
    //     EventRegister.addEventListener("newsUpdated", async (data) => {
    //       setIsProcessing(true);
    //       const response = await getNews();
    //       setNews(response.reverse());
    //       setIsProcessing(false);
    //     });
    //     setIsProcessing(false);
    //   } catch (error) {
    //     setIsProcessing(false);
    //     console.log(error);
    //   }
    // }
    //fetchMyAPI();
  }, []);
  const renderItem = ({ item }) => <ServiceListComponent service={item}/>;


  
  return (
    <View style={styles.container}>
       <FAB
          style={styles.fab}
          small
          theme={{colors:{accent:theme.colors.primary}}}
          icon="plus"
          onPress={() => navigation.navigate("Service Form")}
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

export default ServiceDashboardScreen;
