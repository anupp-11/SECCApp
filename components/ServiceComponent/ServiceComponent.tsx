import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Chip } from 'react-native-paper';
import { theme } from '../LoginComponents/theme';
import styles from './styles';

export default class ServiceComponent extends React.Component{

  constructor(props:any) {
    super(props);
    debugger;
    this.state = {
      service: props.route.params.service,
      isProcessing: true,
      hasError: false,
      errorMessage: "Error",
      selectedSubService: props.route.params.service.subServices[0]
    };
  }

  componentDidMount() {
    debugger;
  };

  //handle subservice selection
  handleSubServiceSelection = (subService:any) => {
    debugger;
    this.setState({
      selectedSubService: subService
    });
  }

  
  render(){
    return(
      <View style={styles.container}>
        
        <View style={styles.chipContainer}>
          {this.state.service.subServices.map((subService:any)=>{

            if(this.state.selectedSubService.id === subService.id){
              return(
                <Chip
                  key={subService.id}
                  style={styles.chip}
                  //selected={true}
                  onPress={()=>{this.handleSubServiceSelection(subService)}}
                  mode="outlined"
                  selectedColor={theme.colors.primary}
                >
                  {subService.name}
                </Chip>
              )
            }else{
              return(
                
                <Chip 
                  key={subService.id}
                  mode='outlined' 
                  style={styles.chip} 
                  onPress={() => this.handleSubServiceSelection(subService)}
                >
                  <Text style={{paddingHorizontal:10}}>{subService.name}</Text>
                </Chip>
              )
            }
            })
          }
        </View>
        
        <Card style={{marginTop:10}}>
          <Card.Cover source={{ uri: this.state.selectedSubService.image }} />
          <Card.Title title={this.state.selectedSubService.name} subtitle="Card Subtitle" />
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

