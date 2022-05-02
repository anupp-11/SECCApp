import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../components/LoginComponents/theme';

type Props = {
  children: React.ReactNode;
};

const Title = ({children}: Props) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: 'black',
    fontWeight:'700',
    textAlign: 'center',
   // marginBottom: 5,
  },
});

export default memo(Title);
