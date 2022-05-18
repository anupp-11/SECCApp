import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Linking,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import { theme } from '../LoginComponents/theme';

import styles from './styles';

const CovidAppealComponent = () => {

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchMyAPI() {
    }
    fetchMyAPI();
  }, [])

  //function to open donation in web
  function readInWeb(){
    const url = "https://seccsydney.kindful.com/embeds/c4cffca9-4f45-479e-987c-e790f5f5e03d?p=https%3A&amp%3Bembedded=true";
    Linking.openURL(url);
  }
  

  return (
    <ScrollView style={styles.container}>
      <Card style={{marginBottom:10}}>
        <Card.Title titleStyle={{ fontSize:16, lineHeight:24, marginVertical:10}} titleNumberOfLines={2} title="The SECC COVID-19 Appeal."/>
        <Card.Cover style={{marginTop:10}} source={require('../../assets/images/thumbdoo.jpeg')} />
        <Card.Content style={{marginTop:10}}>
          <Title>
            Donate now to a local family who needs your help.
          </Title>
          <Paragraph>
            Food insecurity is a growing problem.{"\n"}{"\n"}
            Each week we talk to hundreds of locals who are struggling to pay their food and utility bills.{"\n"}{"\n"}
            With your tax-deductible donation, we can help more clients that need support, life skills assistance and food relief throughout the year.{"\n"}
          </Paragraph>
          <Title style={{fontSize:16,lineHeight:24}}>Donate to SECC today and help us help others. Your gift has a far-reaching impact.</Title>
          <Button style={{marginTop:10}} mode='contained' color={theme.colors.primary} onPress={() => readInWeb()}>DONATE</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default CovidAppealComponent;
