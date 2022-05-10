import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    padding:10,
    flexDirection: 'column',
    height: '100%',
  },
  card: {
    width: '45%',
    height:180,
    margin: 10,
  },
  chip:{
    margin:5,
    //width:120
  },
  chipContainer:{
    display:'flex',
    flexDirection:'row',
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
