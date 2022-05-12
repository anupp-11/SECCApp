import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { WebView } from "react-native-webview";

export default function CheckComponent() {

  const runFirst = `
  let selector = document.querySelector("div#shopify-section-footer")
  let selector2 = document.querySelector("div#HeaderWrapper")
  selector.style.display = "none"
  selector2.style.display = "none"
   
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <View style={styles.container}>
     <WebView
        source={{ uri: "https://www.collectiveoutlet.co.nz/" }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        //pass a function as the onMessage prop for injected Javascript to work
        onMessage={(event) => {runFirst}}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});