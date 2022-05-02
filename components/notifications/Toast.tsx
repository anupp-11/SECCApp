import { useState } from 'react';
import {
    ToastAndroid,
    Platform,
    Alert,
  } from 'react-native';
  import {Snackbar} from 'react-native-paper';

export default function NotifyMessage(msg: string) {
  
if (Platform.OS === 'android') {
  
  
  ToastAndroid.show(msg, ToastAndroid.SHORT)
} else {
  Alert.alert(msg);
}
}