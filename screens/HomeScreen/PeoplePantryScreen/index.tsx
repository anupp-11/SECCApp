import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

import styles from './styles';

const PeoplePantryScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchMyAPI() {
    }
    fetchMyAPI();
  }, [])

  return (
    <View style={styles.container}>
      <Card style={{marginBottom:10}}>
        <Card.Title titleStyle={{ fontSize:16, lineHeight:24, marginVertical:10}} titleNumberOfLines={2} title="The People’s Pantry exists to support locals facing food insecurity."/>
        <Card.Cover style={{marginTop:10}} source={require("../../../assets/images/peoplespantry.jpg")} />
        <Card.Content style={{marginTop:10}}>
          <Paragraph>
            Our grassroots food relief programs runs out of SECC's Community Hub in Mascot, and is fuelled by donations from our community.{"\n"}
          </Paragraph>
          <Title style={{fontSize:16}}>Do you need food support?</Title>
          <Paragraph>
            We have a drop-in service at the Hub during these times every week:{"\n"}{"\n"}
            Wednesdays: 1pm - 4pm{"\n"}
            Thursdays: 9.30am - 3pm{"\n"}
            Fridays: 1pm - 4pm
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default PeoplePantryScreen;
