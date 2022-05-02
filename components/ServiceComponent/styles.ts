import { StyleSheet, ImageBackground } from 'react-native';

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
  }
});

export default styles;
