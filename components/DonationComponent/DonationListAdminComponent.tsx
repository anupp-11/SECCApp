import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  View
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { deleteDonation } from '../../service/DonationService';
import { deleteNews } from '../../service/NewsService';
import AppProgressBar from '../ProgressBar';

const DonationListAdminComponent = (props:any) => {

  const [news, setNews] = React.useState(props.donation);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const navigation = useNavigation();


  const LeftContent = () => <Card.Cover style={{height:50,width:48}} source={{uri:`data:image/jpeg;base64,${news.imageUrl}`}} />

  //function to return date from date and time
  function getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async function confirmDelete(){
    //console.log("Deleted");
    try {
      setIsProcessing(true);
      const response =await deleteDonation(news.id);
      debugger;
      setIsProcessing(false);
      if(response.isSuccess){
        Alert.alert("Donation Deleted Successfully");
        EventRegister.emit('donationUpdated', response);
      }else{
        Alert.alert(response.message);
      }
    } catch (error) {
      setIsProcessing(false);
      Alert.alert(error);
    }
  }
  async function onDelete(){
    Alert.alert("Hold on!", "Are you sure you want to Delete?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Yes", onPress: () => confirmDelete() }
    ]);
  }

  function onEdit(){
    //navigate to edit news screen with news
    navigation.navigate("Edit Donation", {
      donation: news,
    });
  }
  
  return (
    <View style={{marginBottom:10,flex:1,width:'100%'}} >
      {isProcessing == true ? (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2}}>
          <AppProgressBar/>
        </View>) : null}
      <Card>
        <Card.Title title={news.title} subtitle={getDate(news.createdAt)} left={LeftContent}/>
        <Card.Actions>
          <Button onPress={onEdit}>Edit</Button>
          <Button onPress={onDelete}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default DonationListAdminComponent;
