import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Linking,
} from "react-native";
import BackButton from "../../components/LoginComponents/BackButton";
import Button from "../../components/LoginComponents/Button";
import Header from "../../components/LoginComponents/Header";
import Title from "../../components/LoginComponents/Title";
import Logo from "../../components/LoginComponents/Logo";
import TextInput from "../../components/LoginComponents/TextInput";
import { theme } from "../../components/LoginComponents/theme";
import { StackActions, useNavigation } from "@react-navigation/native";

import {
  emailValidator,
  passwordValidator,
} from "../../components/LoginComponents/utils";
import { saveUserToDevice } from "../../service/AccountService";
import AppProgressBar from "../../components/ProgressBar";
import { authUser } from "../../service/AuthenticationService";

const LoginScreen = () => {
  const navigation = useNavigation();

  const ForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const Register = () => {
    navigation.navigate("Register");
  };
  // https://www.secc.sydney/terms-and-conditions/

  const Terms = ()=>{
    //open url on click
    Linking.openURL('https://www.secc.sydney/terms-and-conditions/')
  }
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const _onLoginPressed = async () => {
    // navigation.dispatch(
    //   StackActions.replace('Home', {
    //   })
    // );

    setIsProcessing(true);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setIsProcessing(false);
      return;
    }
    try {
      debugger;
      const response = await authUser(email.value, password.value);
      debugger;
      setIsProcessing(false);
      if (response?.hasError) {
        setErrorMessage(response.message);
      } else {
        saveUserToDevice(response.result);
        navigation.dispatch(StackActions.replace("Home", {}));
      }
    } catch (e) {
      setIsProcessing(false);
      console.log(e);
      Alert.alert("Login Failed");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView
          style={{ height: "100%", backgroundColor: theme.colors.background }}
        >
          <View
            style={{
              flex: 1,
              padding: 20,
              width: "100%",
              maxWidth: 340,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: theme.colors.background,
            }}
          >
            {isProcessing == true ? (
              <View
                style={{
                  position: "absolute",
                  //top:50,
                  marginBottom: "40%",
                  zIndex: 2,
                }}
              >
                <AppProgressBar/>
              </View>
            ) : (
              <View></View>
            )}
            <BackButton goBack={() => navigation.navigate("Dashboard")} />
            <View style={styles.logo}>
              <Logo />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Title>South Eastern</Title>
                <Title>Community Connect</Title>
              </View>
            </View>

            <Header>Login</Header>

            <TextInput
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: "" })}
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
              onChangeText={(text) => setPassword({ value: text, error: "" })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
            {errorMessage ? (
              <View>
                <Text style={{ color: "red", margin: 10 }}>{errorMessage}</Text>
              </View>
            ) : (
              <View></View>
            )}
            <View style={styles.forgotPassword}>
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
              <TouchableOpacity onPress={Terms}>
                <Text style={styles.link}>Terms of Services</Text>
              </TouchableOpacity>
              <Text style={styles.label}> and </Text>
              <TouchableOpacity onPress={Terms}>
                <Text style={styles.link}>Privacy Policy.</Text>
              </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={_onLoginPressed}>
              Login
            </Button>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
    flexWrap: "wrap",
    width: "100%",
  },
  col: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
