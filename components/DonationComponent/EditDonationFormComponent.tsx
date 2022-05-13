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
import { addDonation, Donation, updateDonation } from '../../service/DonationService';
import { EventRegister } from 'react-native-event-listeners';

  const EditDonationFormComponent = (props:any) => {
  
  const [donation, setDonation] = React.useState(props.route.params.donation);
  const navigation = useNavigation();
  const [title, setTitle] = useState({value: donation.title, error: ''});
  const [description, setDescription] = useState({value: donation.description, error: ''});
  const [donationUrl, setDonationUrl] = useState({value: donation.donateBtnUrl, error: ''});
  const [image, setImage] = useState({value: donation.imageUrl, error: ''});
  const [isProcessing, setIsProcessing] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      quality: 0.2
    });
    if (!result.cancelled) {
      setImage({value: result.base64, error: ''});
    }
  };

  const onUpdateDonation = async () => {
    setIsProcessing(true);
    const titleError = fieldValidator(title.value);
    const descriptionError = fieldValidator(description.value);
    const donationUrlError = fieldValidator(donationUrl.value);
    const imageUrlError = imageValidator(image.value);

  
    if (titleError || descriptionError || donationUrlError || imageUrlError) {
      setTitle({...title, error: titleError});
      setDescription({...description, error: descriptionError});
      setDonationUrl({...donationUrl, error: donationUrlError});
      setImage({...image, error: imageUrlError});
      setIsProcessing(false);
      return;
    }
    try {
      const donationData = new Donation(
        title.value,
        description.value,
        image.value,
        donationUrl.value
      );

      const response = await updateDonation(donationData,donation.id);
      setIsProcessing(false);
      debugger;
      if(response.hasError){
        Alert.alert(response.error);
      }else{
        Alert.alert('Donation updated successfully');
        navigation.navigate('Admin Dashboard');
        EventRegister.emit('donationUpdated', response);
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
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',zIndex:2}}>
              <AppProgressBar/>
            </View>) : null}

          {/* TITLE */}
          <TextInput
            label="Donation Title"
            returnKeyType="next"
            value={title.value}
            onChangeText={text => setTitle({value: text, error: ''})}
            error={!!title.error}
            errorText={title.error}
            autoCapitalize="none"
            //textContentType="name"
            keyboardType="default"
          />

          

          {/* Donation Description */}
          <TextInput
            label="Donation Description"
            returnKeyType="next"
            value={description.value}
            onChangeText={text => setDescription({value: text, error: ''})}
            error={!!description.error}
            errorText={description.error}
            //autoCapitalize="characters"
            textContentType="name"
            keyboardType="default"
            multiline={true}
            numberOfLines={3}
          />

          {/* NEWS URL */}
          <TextInput
            label="Donation URL"
            returnKeyType="next"
            value={donationUrl.value}
            onChangeText={text => setDonationUrl({value: text, error: ''})}
            error={!!donationUrl.error}
            errorText={donationUrl.error}
            //autoCapitalize="characters"
            textContentType="URL"
            keyboardType="default"
          />

        
          {/* Image Uploader */}

          <TouchableOpacity onPress={pickImage} style={styles.row}>
            <Ionicons name="ios-image" color={theme.colors.primary} size={25} />
            <Text style={styles.text}>Select title image</Text>
          </TouchableOpacity>

          {image.error ? <Text style={styles.error}>{image.error}</Text> : null}


          {image.value ? <Image source={{uri:`data:image/jpeg;base64,${image.value}`}} style={{ width: 200, height: 200 }} /> : null}
        
          <Button mode="contained" onPress={onUpdateDonation}>
            UPDATE
          </Button>
        </View>
      </ScrollView>
    )
  
};
export default memo(EditDonationFormComponent);

