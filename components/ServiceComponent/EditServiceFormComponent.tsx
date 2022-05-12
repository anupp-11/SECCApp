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
import { getNews,addNews } from '../../service/NewsService';
import { News } from '../../models/BaseModel';
import AppProgressBar from '../ProgressBar';
import { ScrollView } from 'react-native-gesture-handler';

  const EditServiceFormComponent = (props:any) => {


  const [service, setService] = React.useState(props.service);

  const navigation = useNavigation();
  const [title, setTitle] = useState({value: '', error: ''});
  const [subtitle, setSubtitle] = useState({value: '', error: ''});
  const [newsSnippet, setNewsSnippet] = useState({value: '', error: ''});
  const [newsUrl, setNewsUrl] = useState({value: '', error: ''});
  const [image, setImage] = useState({value: '', error: ''});
  const [isProcessing, setIsProcessing] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      quality: 0.2
    });

    console.log(result);

    if (!result.cancelled) {
      setImage({value: result.base64, error: ''});
    }
  };

  const onAddNews = async () => {
    setIsProcessing(true);
    const titleError = fieldValidator(title.value);
    const subtitleError = fieldValidator(subtitle.value);
    const newsSnippetError = fieldValidator(newsSnippet.value);
    const newsUrlError = fieldValidator(newsUrl.value);
    const imageUrlError = imageValidator(image.value);

  
    if (titleError || subtitleError || newsSnippetError || newsUrlError || imageUrlError) {
      setTitle({...title, error: titleError});
      setSubtitle({...subtitle, error: subtitleError});
      setNewsSnippet({...newsSnippet, error: newsSnippetError});
      setNewsUrl({...newsUrl, error: newsUrlError});
      setImage({...image, error: imageUrlError});
      setIsProcessing(false);
      return;
    }
    try {
      const news = new News(
        title.value,
        subtitle.value,
        newsSnippet.value,
        image.value,
        newsUrl.value
      );

      const response = await addNews(news);
      setIsProcessing(false);
      debugger;
      if(response.hasError){
        Alert.alert(response.error);
      }else{
        Alert.alert('News added successfully');
        navigation.navigate('News');
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
            label="Service Subtitle"
            returnKeyType="next"
            value={subtitle.value}
            onChangeText={text => setSubtitle({value: text, error: ''})}
            error={!!subtitle.error}
            errorText={subtitle.error}
            //autoCapitalize="characters"
            textContentType="name"
            keyboardType="default"
          />

          {/* Service SNIPPET */}
          <TextInput
            label="Service Snippet"
            returnKeyType="next"
            value={newsSnippet.value}
            onChangeText={text => setNewsSnippet({value: text, error: ''})}
            error={!!newsSnippet.error}
            errorText={newsSnippet.error}
            //autoCapitalize="characters"
            textContentType="name"
            keyboardType="default"
            multiline={true}
            numberOfLines={3}
          />

          {/* NEWS URL */}
          <TextInput
            label="Service URL"
            returnKeyType="next"
            value={newsUrl.value}
            onChangeText={text => setNewsUrl({value: text, error: ''})}
            error={!!newsUrl.error}
            errorText={newsUrl.error}
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
          


          <Button mode="contained" onPress={onAddNews}>
            ADD
          </Button>


        </View>
      </ScrollView>
    )
  
};
export default memo(EditServiceFormComponent);

