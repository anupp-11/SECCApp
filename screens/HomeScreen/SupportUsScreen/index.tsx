import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import styles from './styles';

const SupportUsScreen = () => {
  const navigation = useNavigation();

  
  
  return (
    <View style={styles.container}>
      <Text>This is support us screen.</Text>
      
    </View>
  );
};

export default SupportUsScreen;
