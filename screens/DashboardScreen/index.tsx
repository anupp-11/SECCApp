import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import {StackActions, useNavigation} from '@react-navigation/native';
import Paragraph from '../../components/LoginComponents/Paragraph';
import { theme } from '../../components/LoginComponents/theme';
import { TouchableOpacity, View,StyleSheet,Text } from 'react-native';
import { saveUserToDevice } from '../../service/AccountService';
import { AuthDetail } from '../../models/BaseModel';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login');
  };
  const Signup = () => {
    navigation.navigate('Register');
  };

  const ForgotPassword = () => {
    const user = new AuthDetail(
      "Guest",
      "1",
      "guest",
      null,
      "guest@mail.com"
    );
    saveUserToDevice(user);
    navigation.dispatch(StackActions.replace("Home", {}));
  };
  return (
    <Background>
      
      <Header>Welcome To</Header>
      <Logo />
      <Header>SECC</Header>
      <Button mode="contained" onPress={Login}>
        Login
      </Button>
      <Button mode="outlined" labelStyle = {{color : theme.colors.primary}} onPress={Signup} >
        Sign Up
      </Button>
      <View>
        <TouchableOpacity onPress={ForgotPassword}>
          <Text style={styles.link}>Continue as guest</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
    marginTop:10
  },
});

export default DashboardScreen;