import { FORGOT_PASSWORD_URL, LOGIN_URL, REGISTER_URL, RESET_PASS_URL, VERIFY_RESET_TOKEN_URL } from "../constants/api";
import { RegisterUser } from "../models/BaseModel";


export async function authUser(email:string, pass:string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password:pass })
  };
  debugger;
  const response = await fetch(LOGIN_URL, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

export async function registerUser(userInfo : RegisterUser) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  const response = await fetch(REGISTER_URL, requestOptions);
  const data = await response.json();
  return data;
}



export async function forgetPassword(email:string) {
  
  const url =  FORGOT_PASSWORD_URL+`?emailId=`+encodeURIComponent(email);
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(url,requestOptions);
  const data = await response.json();
  debugger;
  return data;
}
export async function verifyOtp(email:string,token:string) {
  debugger;
  const url =  VERIFY_RESET_TOKEN_URL+`?emailId=`+encodeURIComponent(email)+`&token=`+token;
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(url,requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

export async function resetPassword(email:string,token:string,newPassword:string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, otp:token, newPassword: newPassword })
  };
  const response = await fetch(RESET_PASS_URL,requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

