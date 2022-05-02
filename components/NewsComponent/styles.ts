import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    padding:10,
    flexDirection: 'column',
    height: '100%',
  },
  row:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text:{
    marginLeft:10,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default styles;
