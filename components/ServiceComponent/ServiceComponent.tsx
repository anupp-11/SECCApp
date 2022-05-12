import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Chip } from 'react-native-paper';
import { getServicesByParentId } from '../../service/ServicesService';
import { theme } from '../LoginComponents/theme';
import AppProgressBar from '../ProgressBar';
import styles from './styles';

export default class ServiceComponent extends React.Component{

  constructor(props:any) {
    super(props);
    debugger;
    this.state = {
      id: props.route.params.service,
      isProcessing: true,
      hasError: false,
      errorMessage: "Error",
      services:[]
      //selectedSubService: props.route.params.service.subServices[0]
    };
  }

  async componentDidMount() {
    this.setState({ isProcessing: true });
    const services = await getServicesByParentId(this.state.id);
    this.setState({services:services});
    debugger;
    this.setState({ isProcessing: false });
  };

  //handle subservice selection
  handleSubServiceSelection = (subService:any) => {
    debugger;
    this.setState({
      selectedSubService: subService
    });
  }

  
  render(){
    if(this.state.isProcessing){
    
      return <AppProgressBar />;
    }else{
        return(
          <View style={styles.container}>
            
            <View style={styles.chipContainer}>
              {this.state.services.map((subService:any)=>{
    
                // if(this.state.selectedSubService.id === subService.id){
                //   return(
                //     <Chip
                //       key={subService.id}
                //       style={styles.chip}
                //       //selected={true}
                //       onPress={()=>{this.handleSubServiceSelection(subService)}}
                //       mode="outlined"
                //       selectedColor={theme.colors.primary}
                //     >
                //       {subService.title}
                //     </Chip>
                //   )
                // }else{
                  return(
                    
                    <Chip 
                      key={subService.id}
                      mode='outlined' 
                      style={styles.chip} 
                      onPress={() => this.handleSubServiceSelection(subService)}
                    >
                      <Text style={{paddingHorizontal:10}}>{subService.title}</Text>
                    </Chip>
                  )
                // }
                })
              }
            </View>
            
            {/* <Card style={{marginTop:10}}>
              <Card.Cover source={{ uri: this.state.selectedSubService.image }} />
              <Card.Title title={this.state.selectedSubService.name} subtitle="Card Subtitle" />
              <Card.Content>
                <Paragraph style={{textAlign:'justify'}}>With extreme weather and floods impacting NSW, it’s critical we know what support is available. Here are five tips from Multicultural NSW for keeping safe during this uncertain time.With extreme weather and floods impacting NSW, it’s critical we know what support is available. Here are five tips from Multicultural NSW for keeping safe during this uncertain time.</Paragraph>
              </Card.Content>
              
              <Card.Actions style={{display:'flex',justifyContent:'center',marginVertical:10}}>
                <Button mode='contained' color={theme.colors.primary}>READ IN WEB</Button>
              </Card.Actions>
            </Card> */}
    
          </View>
        )
      }
  }
};

