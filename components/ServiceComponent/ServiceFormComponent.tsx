import { useNavigation } from '@react-navigation/native';
import React, {memo, useState} from 'react';
import TextInput from '../LoginComponents/TextInput';
import {Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import Button from '../LoginComponents/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../LoginComponents/theme';
import { fieldValidator, imageValidator } from '../LoginComponents/utils';
import AppProgressBar from '../ProgressBar';
import { ScrollView } from 'react-native-gesture-handler';
import { addService, ServiceModel } from '../../service/ServicesService';
import { EventRegister } from 'react-native-event-listeners';

  const Service = () => {
  
  
  const navigation = useNavigation();
  const [title, setTitle] = useState({value: '', error: ''});
  const [parentId, setParentId] = useState({value: '', error: ''});
  const [url, setUrl] = useState({value: '', error: ''});
  const [isProcessing, setIsProcessing] = useState(false);

  const onAddService = async () => {
    setIsProcessing(true);
    const titleError = fieldValidator(title.value);
    const parentIdError = fieldValidator(parentId.value);
    const urlError = fieldValidator(url.value);
  
    if (titleError || parentIdError || urlError) {
      setTitle({...title, error: titleError});
      setParentId({...parentId, error: parentIdError});
      setUrl({...url, error: urlError});
      setIsProcessing(false);
      return;
    }
    try {
      const service = new ServiceModel(
        title.value,
        parentId.value,
        url.value
      );

      const response = await addService(service);
      setIsProcessing(false);
      debugger;
      if(response.hasError){
        Alert.alert(response.error);
      }else{
        Alert.alert('Service added successfully');
        navigation.navigate('Admin Dashboard');
       // EventRegister.emit('newsUpdated', response);
      }
      
    } catch (error) {
      setIsProcessing(false);
      console.log(error);
      Alert.alert('Something went wrong');
    }

    


  }

  
    return(
      <ScrollView>
          <View style={styles.container}>
          {isProcessing == true ? (
          <View style={{
            position: 'absolute',
            marginBottom: '40%',
            zIndex: 2
          }}>
            <AppProgressBar/>
          </View>) : null}

          {/* TITLE */}
          <TextInput
            label="Service Title"
            returnKeyType="next"
            value={title.value}
            onChangeText={text => setTitle({value: text, error: ''})}
            error={!!title.error}
            errorText={title.error}
            autoCapitalize="none"
            //textContentType="name"
            keyboardType="default"
          />

          {/* SUBTITLE */}
          <TextInput
            label="Service Parent Id"
            returnKeyType="next"
            value={parentId.value}
            onChangeText={text => setParentId({value: text, error: ''})}
            error={!!parentId.error}
            errorText={parentId.error}
            //autoCapitalize="characters"
            textContentType="name"
            keyboardType="default"
          />

          {/* NEWS URL */}
          <TextInput
            label="Service URL"
            returnKeyType="next"
            value={url.value}
            onChangeText={text => setUrl({value: text, error: ''})}
            error={!!url.error}
            errorText={url.error}
            //autoCapitalize="characters"
            textContentType="URL"
            keyboardType="default"
          />

          <Button mode="contained" onPress={onAddService}>
            ADD
          </Button>


        </View>
      </ScrollView>
    )
  
};
export default memo(Service);

