import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Title from '../../components/LoginComponents/Title';
import Logo from '../../components/LoginComponents/Logo';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {StackActions, useNavigation} from '@react-navigation/native';

import {
  emailValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';
import { authUser } from '../../service/AccountService';
import AppProgressBar from '../../components/ProgressBar';

const LoginScreen = () => {
  const navigation = useNavigation();

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const Register = () => {
    navigation.navigate('Register');
  };

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [isProcessing, setIsProcessing] = useState(false);

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    //const response = await authUser(email.value, password.value);
    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    debugger;
    navigation.dispatch(
      StackActions.replace('Home',{
      })
    );
    //navigation.navigate('Home');
  };

  return (
    <Background>

      {isProcessing == true ? (
        <View style={{
          position: 'absolute',
          marginBottom: '40%',
          zIndex: 2
        }}>
          <AppProgressBar/>
        </View>) : null}
    
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <View style={styles.logo}>
        <Logo />
        <View style={{display:'flex', flexDirection:'column',alignItems:'flex-start'}}>
          <Title>South Eastern</Title>
          <Title>Community Connect</Title>
        </View>
      </View>

      <Header>Login</Header>
      
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style ={styles.forgotPassword}>
        <View>
          <TouchableOpacity onPress={ForgotPassword}>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={Register}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>By continuing you agree to our </Text>
        <TouchableOpacity onPress={Register}>
          <Text style={styles.link}>Terms of Services</Text>
        </TouchableOpacity>
        <Text style={styles.label}> and </Text>
        <TouchableOpacity onPress={Register}>
          <Text style={styles.link}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>
    </Background>
  );
};
const styles = StyleSheet.create({
  logo: {
    display:'flex',
    flexDirection:'row', 
    width:'100%',
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom:30
  },
  forgotPassword: {
    display:'flex',
    flexDirection:'row', 
    width:'100%',
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom:40
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    flexWrap:'wrap',
    width: '100%'
  },
  col: {
    flexDirection: 'column',
    flexWrap:'wrap',
    width: '100%',
    },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
