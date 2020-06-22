import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const App = () => (
  <WebView
    source={{uri: 'http://covid.hellobagus.com/'}}
    contentInsetAdjustmentBehavior="automatic"
  />
);

export default App;
