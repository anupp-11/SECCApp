import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { deleteNews } from '../../service/NewsService';

const ServiceListComponent = (props:any) => {

  const [service, setService] = React.useState(props.service);

  const navigation = useNavigation();
  const handelOnPress=()=>{
    navigation.navigate("News Detail", {
      news: service,
    }); 
  }

  const LeftContent = () => <Card.Cover style={{height:50,width:48}} source={{uri:`data:image/jpeg;base64,${service.imageUrl}`}} />

  //function to return date from date and time
  function getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async function confirmDelete(){
    console.log("Deleted");
    // try {
    //   const response =await deleteNews(service.id);
    //   debugger;
    //   if(response.isSuccess){
    //     Alert.alert("Service Deleted Successfully");
    //   }else{
    //     Alert.alert(response.message);
    //   }
    // } catch (error) {
    //   Alert.alert(error);
    // }
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
    
  }
  
  return (
    <View style={{marginBottom:10}} >
      <Card onPress={handelOnPress}>
        <Card.Title title={service.title} subtitle={getDate(service.createdAt)} left={LeftContent}/>
        <Card.Actions>
          <Button>Edit</Button>
          <Button onPress={onDelete}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ServiceListComponent;
