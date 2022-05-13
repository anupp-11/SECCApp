import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View
} from 'react-native';
import WebView from 'react-native-webview';
import AppProgressBar from '../ProgressBar';


export default function ServiceWebViewComponent(props:any){

  debugger;
  const [service,setService] = React.useState(props.service);

  const runFirst = `
    let selector = document.querySelector("header#main-header")
    let selector2 = document.querySelector("footer#main-footer")
    let selector3 = document.querySelector("div#left-area")
    let social = document.querySelector("div.et_social_mobile.et_social_fadein");

    selector.style.display = "none"
    selector2.style.display = "none"
    selector3.style.marginTop = "-200px"
    social.style.display = "none"
      
    true; // note: this is required, or you'll sometimes get silent failures
  `;
  
  
    return(
        <WebView 
          source={{ uri:service.url }} 
          injectedJavaScript={runFirst}
          javaScriptEnabled={true}
          onMessage={(event) => {runFirst}}
          style={{ flex: 1 }}
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
    )
};

