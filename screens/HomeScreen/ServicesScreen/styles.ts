import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../../components/LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    //alignContent: 'space-around',
    height: '100%',
  },

  card: {
    width: '40%',
    height:180,
    margin: 10,
  },


});

export default styles;
