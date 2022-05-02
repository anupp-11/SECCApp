import {StackActions, useNavigation} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import Title from '../../components/LoginComponents/Title';

import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../components/LoginComponents/utils';
import AppProgressBar from '../../components/ProgressBar';
import { RegisterUser } from '../../models/BaseModel';
import { registerUser } from '../../service/AuthenticationService';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate('Login');
  };

  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    setIsProcessing(true);
    debugger;
    //Register user 
    const userData = new RegisterUser(name.value, email.value, password.value);
    try {
      const response = await registerUser(userData);
      console.log(response);
      setIsProcessing(false);  
      if(response?.isError){
        setErrorMessage(response.message);
        Alert.alert(response.message);
        navigation.navigate('Register');
      }
      else{
        Alert.alert("Registration Successful");
        navigation.dispatch(
          StackActions.replace('Login',{
          })
        );
      }
    } catch (error) {
      setIsProcessing(false);
      console.log(error);
      Alert.alert("Registration Failed",error.message);
    }
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
      <BackButton goBack={() => navigation.navigate('Login')} />

      <View style={styles.logo}>
        <Logo />
        <View style={{display:'flex', flexDirection:'column',alignItems:'flex-start'}}>
          <Title>South Eastern</Title>
          <Title>Community Connect</Title>
        </View>
      </View>

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />

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

      <View style={styles.roww}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={Login}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.row}>
        <Text style={styles.label}>By continuing you agree to our </Text>
        <TouchableOpacity >
          <Text style={styles.link}>Terms of Services</Text>
        </TouchableOpacity>
        <Text style={styles.label}> and </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
        Sign Up
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
  
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    flexWrap:'wrap',
    width: '100%',
  },
  roww: {
    flexDirection: 'row',
    marginTop: 4,
    flexWrap:'wrap',
    width: '100%',
    marginBottom:40
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

export default memo(RegisterScreen);
