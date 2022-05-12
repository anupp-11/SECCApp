import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { deleteNews } from '../../service/NewsService';
import AppProgressBar from '../ProgressBar';

const NewsListComponent = (props:any) => {

  const [news, setNews] = React.useState(props.news);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const navigation = useNavigation();
  const handelOnPress=()=>{
    navigation.navigate("News Detail", {
      news: news,
    }); 
  }

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
      const response =await deleteNews(news.id);
      debugger;
      setIsProcessing(false);
      if(response.isSuccess){
        Alert.alert("News Deleted Successfully");
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
    
  }
  
  return (
    <View style={{marginBottom:10,flex:1,width:'100%'}} >
      {isProcessing == true ? (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2}}>
          <AppProgressBar/>
        </View>) : null}
      <Card onPress={handelOnPress}>
        <Card.Title title={news.title} subtitle={getDate(news.createdAt)} left={LeftContent}/>
        {/* <Card.Actions>
          <Button>Edit</Button>
          <Button onPress={onDelete}>Delete</Button>
        </Card.Actions> */}
      </Card>
    </View>
  );
};

export default NewsListComponent;
