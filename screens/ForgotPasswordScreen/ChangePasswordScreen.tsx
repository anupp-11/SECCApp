import {StackActions, useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView, Keyboard, Platform, Alert, ActivityIndicator} from 'react-native';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {cpasswordValidator,passwordValidator} from '../../components/LoginComponents/utils';
import { resetPassword } from '../../service/AuthenticationService';

const ChangePasswordScreen = (props:any) => {

  const navigation = useNavigation();
  const [password, setPassword] = useState({value: '', error: ''});
  const [cpassword, setCPassword] = useState({value: '', error: ''});
  const [isProcessing, setisProcessing ] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const _onSendPressed = async () => {
    
    const passwordError = passwordValidator(password.value);
    const cpasswordError = cpasswordValidator(password.value,cpassword.value);
    if (passwordError || cpasswordError) {
      setPassword({...password, error: passwordError});
      setCPassword({...cpassword, error: cpasswordError});
      return;
    }
      const emailId = props.route.params.email;
      const token = props.route.params.token;
      const newPassword = cpassword.value;
      try {
        setisProcessing(true);
        const response = await resetPassword(emailId,token,newPassword);
        setisProcessing(false);
        debugger;
        setisProcessing(false);
        if (response?.hasError) {
          setErrorMessage(response.message);
        } else {
          navigation.dispatch(
            StackActions.replace('Login',{
             
            })
          );
        }
      } catch (e) {
        setisProcessing(false);
        console.log(e);
        Alert.alert("API"+ e);
      }
  };

 
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{height:'100%',backgroundColor:theme.colors.background}}>
        <View style={{
          flex: 1,
          padding: 20,
          width: '100%',
          maxWidth: 340,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height:'100%',
          backgroundColor:theme.colors.background}}>
      <Logo />

      <Header>Change Password</Header>
      {isProcessing ==true ? (
                <View >
                <ActivityIndicator size="large" color={theme.colors.primary}/> 
                </View>):(<View></View>)}

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          //label="Password"
          returnKeyType="next"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          //label="Password"
          returnKeyType="done"
          value={cpassword.value}
          onChangeText={text => setCPassword({value: text, error: ''})}
          error={!!cpassword.error}
          errorText={cpassword.error}
          secureTextEntry
        />
      </View>

      {errorMessage ? (
                <View>
                  <Text style={{color:'red',margin:5}}>{errorMessage}</Text>
                </View>):(<View></View>)}
      <Button mode="contained"  onPress={_onSendPressed} style={styles.button}>
        Submit 
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  inputBox: {
    width: '100%',
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    //marginBottom: 4,
  },
});

export default memo(ChangePasswordScreen);
