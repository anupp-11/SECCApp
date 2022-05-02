import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../../components/LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    padding:20,
    flexDirection: 'column',
    height: '100%',
  },
  titletext :{
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
  },
  bodytext :{
    fontWeight: '600',
    fontSize: 14,
    color: theme.colors.secondary,
    lineHeight: 20,
  },
  linktext :{
    fontWeight: '600',
    fontSize: 14,
    color: '#0279fe',
    lineHeight: 20,
  },
});

export default styles;
