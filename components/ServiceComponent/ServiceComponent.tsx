import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { Chip } from 'react-native-paper';
import WebView from 'react-native-webview';
import { getServicesByParentId } from '../../service/ServicesService';
import { theme } from '../LoginComponents/theme';
import AppProgressBar from '../ProgressBar';
import styles from './styles';

export default function ServiceComponent (props:any) {

  const [services, setServices] = React.useState([]);
  const [selectedSubService, setSelectedSubService] = React.useState("");
  const [isProcessing, setIsProcessing] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("Error");
  const [id, setId] = React.useState(props.route.params.service);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setIsProcessing(true);
        const services = await getServicesByParentId(id);
        if(services.length > 0){
          setServices(services);
          setSelectedSubService(services[0]);
          setIsProcessing(false);
        }else{
          setIsProcessing(false);
        }
      } catch (error) {
        setIsProcessing(false);
        debugger;
        console.log(error);
      } 
    }
    fetchMyAPI();
  }, []);

  //handle subservice selection
  function handleSubServiceSelection  (subService:any) {   
    setSelectedSubService(subService);
    //set is processing true for 1 sec
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

  }

  const runFirst = `
  let selector = document.querySelector("header#main-header")
  let selector2 = document.querySelector("footer#main-footer")
  let selector3 = document.querySelector("div#main-content")
  let social = document.querySelector("div.et_social_mobile.et_social_fadein");

  selector.style.display = "none"
  selector2.style.display = "none"
  selector3.style.marginTop = "-155px"
  selector3.style.marginBottom = "-40px"
  social.style.display = "none"
    
  true; // note: this is required, or you'll sometimes get silent failures
`;

  

    if(isProcessing){
      return (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2}}>
          <AppProgressBar/>
        </View>
      )
    }else{
        return(
          <View style={styles.container}>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{maxHeight:43}}>
              {services.map((subService:any)=>{
    
                if(selectedSubService.id === subService.id){
                  return(
                    <Chip
                      key={subService.id}
                      style={styles.chip}
                      //selected={true}
                      onPress={()=>{handleSubServiceSelection(subService)}}
                      mode="outlined"
                      selectedColor={theme.colors.primary}
                    >
                      {subService.title}
                    </Chip>
                  )
                }else{
                  return(
                    <Chip 
                      key={subService.id}
                      mode='outlined' 
                      style={styles.chip} 
                      onPress={() => handleSubServiceSelection(subService)}
                    >
                      <Text style={{paddingHorizontal:10}}>{subService.title}</Text>
                    </Chip>
                  )
                }
                })
              }
            </ScrollView>
            
            {isLoading ? (
              <View style={{position: 'absolute', top: 60, left: 10, right: 10, bottom: 10, justifyContent: 'center', alignItems: 'center',zIndex:2,backgroundColor:'white'}}>
                <AppProgressBar/>
              </View>
            ):(
              <WebView 
              source={{ uri:selectedSubService.url }} 
              injectedJavaScript={runFirst}
              javaScriptEnabled={true}
              onMessage={(event) => {runFirst}}
              style={{ flex: 1,marginTop:5 }}
              startInLoadingState={true}
              renderLoading={() => {
                return (
                  <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2,backgroundColor:'white'}}>
                    <AppProgressBar/>
                  </View>
                );
              }
              }
            />
            )}
          </View>
        )
      }
  
};

