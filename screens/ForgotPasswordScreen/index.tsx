import { StackActions } from "@react-navigation/native";
import React, { memo,  useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Button from "../../components/LoginComponents/Button";
import Header from "../../components/LoginComponents/Header";
import Logo from "../../components/LoginComponents/Logo";
import TextInput from "../../components/LoginComponents/TextInput";
import { theme } from "../../components/LoginComponents/theme";
import { emailValidator } from "../../components/LoginComponents/utils";
import { forgetPassword } from "../../service/AuthenticationService";

const ForgotPasswordScreen = ({ navigation }, props: any) => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setisProcessing] = React.useState<boolean>(false);

  const _onSendPressed = async () => {
    // navigation.dispatch(
    //   StackActions.replace('OtpScreen',{
    //     email :email.value
    //   })
    // );
    // navigation.naviagte('OtpScreen',{email :email.value});

    setisProcessing(true);
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      setisProcessing(false);
      return;
    }
    try {
      const response = await forgetPassword(email.value);
      debugger;
      setisProcessing(false);
      if (response?.hasError) {
        setErrorMessage(response.message);
      } else {
        navigation.dispatch(
          StackActions.replace("OtpScreen", {
            email: email.value,
          })
        );
      }
    } catch (e) {
      setisProcessing(false);
      console.log(e);
      Alert.alert("API" + e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      //style={styles.container}
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
            <Logo />

            <Header>Reset Password</Header>
            {isProcessing == true ? (
              <View>
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            ) : (
              <View></View>
            )}

            <TextInput
              label="E-mail address"
              returnKeyType="done"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: "" })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />

            {errorMessage ? (
              <View>
                <Text style={{ color: "red", margin: 5 }}>{errorMessage}</Text>
              </View>
            ) : (
              <View></View>
            )}

            <Button
              mode="contained"
              onPress={_onSendPressed}
              style={styles.button}
            >
              Send Reset Instructions
            </Button>

            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Login")}
            >
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
    width: "100%",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: "100%",
  },
});

export default memo(ForgotPasswordScreen);
