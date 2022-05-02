import { useNavigation } from '@react-navigation/native';
import React, {memo, useState} from 'react';
import TextInput from '../LoginComponents/TextInput';
import {Image, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import Button from '../LoginComponents/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../LoginComponents/theme';
import { fieldValidator, imageValidator } from '../LoginComponents/utils';
import { getNews } from '../../service/NewsService';

  const NewsFormComponent = () => {
  
  
  const navigation = useNavigation();
  const [title, setTitle] = useState({value: '', error: ''});
  const [subtitle, setSubtitle] = useState({value: '', error: ''});
  const [newsSnippet, setNewsSnippet] = useState({value: '', error: ''});
  const [newsUrl, setNewsUrl] = useState({value: '', error: ''});
  const [image, setImage] = useState({value: '', error: ''});

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage({value: result.uri, error: ''});
    }
  };

  const addNews = async () => {
    
    try {
      const response = await getNews();
      debugger;
    } catch (error) {
      
    }
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
      return;
    }
    try {
      const response = await getNews();
      debugger;
    } catch (error) {
      
    }

    


  }

  
    return(
      <View style={styles.container}>

        {/* TITLE */}
        <TextInput
          label="News Title"
          returnKeyType="next"
          value={title.value}
          onChangeText={text => setTitle({value: text, error: ''})}
          error={!!title.error}
          errorText={title.error}
          autoCapitalize="characters"
          textContentType="name"
          keyboardType="default"
        />

        {/* SUBTITLE */}
        <TextInput
          label="News Subtitle"
          returnKeyType="next"
          value={subtitle.value}
          onChangeText={text => setSubtitle({value: text, error: ''})}
          error={!!subtitle.error}
          errorText={subtitle.error}
          autoCapitalize="characters"
          textContentType="name"
          keyboardType="default"
        />

        {/* NEWS SNIPPET */}
        <TextInput
          label="News Snippet"
          returnKeyType="next"
          value={newsSnippet.value}
          onChangeText={text => setNewsSnippet({value: text, error: ''})}
          error={!!newsSnippet.error}
          errorText={newsSnippet.error}
          autoCapitalize="characters"
          textContentType="name"
          keyboardType="default"
          multiline={true}
          numberOfLines={3}
        />

        {/* NEWS URL */}
        <TextInput
          label="News URL"
          returnKeyType="next"
          value={newsUrl.value}
          onChangeText={text => setNewsUrl({value: text, error: ''})}
          error={!!newsUrl.error}
          errorText={newsUrl.error}
          autoCapitalize="characters"
          textContentType="URL"
          keyboardType="default"
        />

      
        {/* Image Uploader */}

        <TouchableOpacity onPress={pickImage} style={styles.row}>
          <Ionicons name="ios-image" color={theme.colors.primary} size={25} />
          <Text style={styles.text}>Select title image</Text>
        </TouchableOpacity>

        {image.error ? <Text style={styles.error}>{image.error}</Text> : null}


        {image.value ? <Image source={{ uri: image.value }} style={{ width: 200, height: 200 }} /> : null}
        


        <Button mode="contained" onPress={addNews}>
          ADD
        </Button>


      </View>
    )
  
};
export default memo(NewsFormComponent);

