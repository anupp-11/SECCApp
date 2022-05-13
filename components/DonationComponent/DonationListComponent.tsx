import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AppProgressBar from '../ProgressBar';

const DonationListComponent = (props:any) => {

  const [donation, setDonation] = React.useState(props.donation);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const navigation = useNavigation();
  const handelOnPress=()=>{
    navigation.navigate("Donation Detail", {
      donation: donation,
    }); 
  }

  const LeftContent = () => <Card.Cover style={{height:50,width:48}} source={{uri:`data:image/jpeg;base64,${donation.imageUrl}`}} />

  //function to return date from date and time
  function getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }

  
  
  return (
    <View style={{marginBottom:10,flex:1,width:'100%'}} >
      {isProcessing == true ? (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2}}>
          <AppProgressBar/>
        </View>) : null}
      <Card onPress={handelOnPress}>
        <Card.Title title={donation.title} subtitle={getDate(donation.createdAt)} left={LeftContent}/>
      </Card>
    </View>
  );
};

export default DonationListComponent;
