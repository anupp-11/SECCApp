import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Linking,
  View,
} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import { theme } from '../LoginComponents/theme';

import styles from './styles';

const DonationComponent = (props:any) => {

  const [donation, setDonation] = React.useState(props.route.params.donation);

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchMyAPI() {
    }
    fetchMyAPI();
  }, [])

  //onDonate button click open link in browser
  const onDonate = () => {
    const url = donation.donateBtnUrl;
    Linking.openURL(url);
  }
  

  return (
    <View style={styles.container}>
      <Card style={{marginBottom:10}}>
        <Card.Title titleStyle={{ fontSize:16, lineHeight:24, marginVertical:10}} titleNumberOfLines={2} title={donation.title}/>
        <Card.Cover style={{marginTop:10}} source={{uri:`data:image/jpeg;base64,${donation.imageUrl}`}} />
        <Card.Content style={{marginTop:10}}>
          <Paragraph>
            {donation.description}{"\n"}
          </Paragraph>
          <Button mode='contained' color={theme.colors.primary} onPress={onDonate}>Donate</Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default DonationComponent;
