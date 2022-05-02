import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View
} from 'react-native';
import { Card,} from 'react-native-paper';
import styles from './styles';

const ServiceCardComponent = (props:any) => {

  const [service, setService] = React.useState(props.service);

  const navigation = useNavigation();
  const handelOnPress=()=>{
    navigation.navigate("Service", {
      service: service,
    }); 
  }
    
  return (
    <Card style={styles.card} onPress={handelOnPress}>
      <Card.Cover style={{height:130}} source={{ uri: service.image }} />
      <Card.Title titleStyle={{ fontSize:16 }} title={service.name}/>
    </Card>
  );
};

export default ServiceCardComponent;
