import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Card } from 'react-native-paper';
import DonationListComponent from '../../../components/DonationComponent/DonationListComponent';
import { getDonations } from '../../../service/DonationService';
import styles from './styles';

const SupportUsScreen = () => {
  const navigation = useNavigation();


  const handelOnPress=()=>{
    navigation.navigate("COVID-19 Appeal"); 
  }

  const [donation, setDonation] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setIsProcessing(true);
        const response = await getDonations();
        setDonation(response.reverse());
        setIsProcessing(false);
      } catch (error) {
        setIsProcessing(false);
        console.log(error);
      }
    }

    fetchMyAPI();
  }, []);

  const headerComponent = () =>{
    return(
      <Card onPress={handelOnPress} style={{marginBottom:10}}>
        <Card.Cover source={require('../../../assets/images/thumb.jpeg')} />
        <Card.Title title="The SECC COVID-19 Appeal"/>
      </Card>
    );
  };
  const renderItem = ({ item }) => <DonationListComponent donation={item}/>;
  return (
    <View style={styles.container}>
     
      <FlatList
          ListHeaderComponent = {headerComponent}
          initialNumToRender={8}
          showsVerticalScrollIndicator={false}
          data={donation}
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

export default SupportUsScreen;
