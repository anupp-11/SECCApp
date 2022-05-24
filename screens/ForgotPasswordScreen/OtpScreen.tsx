import {StackActions, useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView, Alert, ActivityIndicator} from 'react-native';
import BackButton from '../../components/LoginComponents/BackButton';
import Background from '../../components/LoginComponents/Background';
import Button from '../../components/LoginComponents/Button';
import Header from '../../components/LoginComponents/Header';
import Logo from '../../components/LoginComponents/Logo';
import TextInput from '../../components/LoginComponents/TextInput';
import {theme} from '../../components/LoginComponents/theme';
import {emailValidator} from '../../components/LoginComponents/utils';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { verifyOtp } from '../../service/AuthenticationService';

  

  const CELL_COUNT = 6;
  let timer = () => {};

  const OtpScreen = (props:any) => {


    const navigation = useNavigation();
    const [isProcessing, setisProcessing ] = React.useState<boolean>(false);
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [errorMessage, setErrorMessage] = useState(null);
    const [propsHand, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    

    const _onSendPressed = async () => {
      navigation.dispatch(
        StackActions.replace('ChangePassword',{
          email :props.route.params.email,
          token:value
        })
      );
      // const email = props.route.params.email;
      // const token = value;
      // console.log("Email and OTP", email,token)
      // setisProcessing(true);
      // try {
      //   const response = await verifyOtp(email,token);
      //   setisProcessing(false);
      //   debugger;
      //   setisProcessing(false);
      //   if (response?.hasError) {
      //     setErrorMessage(response.message);
      //   } else {
      //     navigation.dispatch(
      //       StackActions.replace('ChangePassword',{
      //         email :props.route.params.email,
      //         token:value
      //       })
      //     );
      //   }
      // } catch (e) {
      //   setisProcessing(false);
      //   console.log(e);
      //   Alert.alert("API"+ e);
      // }
     
    };
    const isFromInvalid = () => {
      if (isValidString(value)) {
        return false;
      }
      return true;
    };
    const isValidString = (data: string) => {
      if (!data || data.length == 0) {
        return false;
      }
      return true;
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

              <Header>Verification</Header>

              <View style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <Text>We've sent a verification code sent to </Text>
                <Text style={styles.link}>{props.route.params.email}</Text>
              </View>
              <Text style={{marginVertical:20}}>Enter the 6-digit verification code. </Text>
               

              {isProcessing ==true ? (
                <View >
                <ActivityIndicator size="large" color={theme.colors.primary}/> 
                </View>):(<View></View>)}
              <CodeField
                ref={ref}
                {...propsHand}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
                {errorMessage ? (
                <View>
                  <Text style={{color:'red',margin:5}}>{errorMessage}</Text>
                </View>):(<View></View>)}
                
              <Button mode="contained" 
              // disabled={isFromInvalid()}
                onPress={_onSendPressed} style={styles.button}>
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
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default memo(OtpScreen);
