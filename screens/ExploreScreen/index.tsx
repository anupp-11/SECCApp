import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import WebView from 'react-native-webview';
import Background from '../../components/LoginComponents/Background';
import AppProgressBar from '../../components/ProgressBar';

import styles from './styles';



const HomeScreen = ({searchValue}: {searchValue: string}) => {

  const runFirst = `
  let selector = document.querySelector("header#main-header")
  let selector2 = document.querySelector("footer#main-footer")
  let selector3 = document.querySelector("div#content-area")
  let social = document.querySelector("div.et_social_mobile.et_social_fadein");

  selector.style.display = "none"
  selector2.style.display = "none"
  selector3.style.marginTop = "-220px"
  selector3.style.marginBottom = "-100px"
  social.style.display = "none"
    
  true; // note: this is required, or you'll sometimes get silent failures
`;

  return (
    <WebView 
      source={{uri: "https://www.secc.sydney/events/"}}
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
  );
};

export default HomeScreen;
