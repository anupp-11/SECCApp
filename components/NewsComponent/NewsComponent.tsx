import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Linking,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import WebView from 'react-native-webview';
import { theme } from '../LoginComponents/theme';
import styles from './styles';

// const runFirst = `
// let selector = document.querySelector("div#shopify-section-footer")

// selector.style.display = "none"
   
//       true; // note: this is required, or you'll sometimes get silent failures
//     `;

export default class NewsComponent extends React.Component{

  constructor(props:any) {
    super(props);
    this.state = {
      news: props.route.params.news,
      isProcessing: true,
      hasError: false,
      errorMessage: "Error",
    };
    debugger;
  }
  
  async componentDidMount() {
  }

  //create a function to return date from date and time
  getDate(date:any){
    const dateTime = new Date(date);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${day}/${month}/${year}`;
  }

  //function to open news in web
  readInWeb(){
    debugger;
    const url = this.state.news.newsUrl;
    debugger;
    Linking.openURL(url);
  }
  
  

  
  render(){
    return(
      // <WebView source={{ uri:  this.state.news.newsUrl }} />
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Cover source={{uri:`data:image/jpeg;base64,${this.state.news.imageUrl}`}} />
            <Card.Title title={this.state.news.title} subtitle={this.getDate(this.state.news.createdAt)} titleNumberOfLines={3} />
            <Card.Content>
              <Paragraph style={{textAlign:'justify'}}>{this.state.news.newsSnippet}</Paragraph>
            </Card.Content>
            
            <Card.Actions style={{display:'flex',justifyContent:'center',marginVertical:10}}>
              <Button mode='contained' color={theme.colors.primary} onPress={() => this.readInWeb()}>READ IN WEB</Button>
            </Card.Actions>
          </Card>

        </View>
      </ScrollView>
    )
  }
};

