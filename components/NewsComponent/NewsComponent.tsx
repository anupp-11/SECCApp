import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { theme } from '../LoginComponents/theme';
import styles from './styles';

export default class NewsComponent extends React.Component{

  constructor(props:any) {
    super(props);
    this.state = {
      news: props.news,
      isProcessing: true,
      hasError: false,
      errorMessage: "Error",
    };
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Paragraph style={{textAlign:'justify'}}>With extreme weather and floods impacting NSW, it’s critical we know what support is available. Here are five tips from Multicultural NSW for keeping safe during this uncertain time.With extreme weather and floods impacting NSW, it’s critical we know what support is available. Here are five tips from Multicultural NSW for keeping safe during this uncertain time.</Paragraph>
          </Card.Content>
          
          <Card.Actions style={{display:'flex',justifyContent:'center',marginVertical:10}}>
            <Button mode='contained' color={theme.colors.primary}>READ IN WEB</Button>
          </Card.Actions>
        </Card>

      </View>
    )
  }
};

