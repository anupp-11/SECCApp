import { StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../../components/LoginComponents/theme';

const styles = StyleSheet.create({

  container:{
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    height: '100%',
  },
  card: {
    width: '40%',
    height:180,
    margin: 10,
  },


  cardBody: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    width:'100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    
  },
      
  titletxt :{
    fontWeight: '700',
    fontSize: 16,
    color: theme.colors.secondary,
    textAlign:'center',
    marginTop:20
  },
});

export default styles;
