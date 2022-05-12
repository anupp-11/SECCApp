import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../../../components/LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    paddingHorizontal:10,
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex:2
  },
});

export default styles;
