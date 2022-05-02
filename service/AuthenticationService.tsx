import { LOGIN_URL, REGISTER_URL } from "../constants/api";
import { RegisterUser } from "../models/BaseModel";


export async function authUser(email:string, pass:string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password:pass })
  };
  const response = await fetch(LOGIN_URL, requestOptions);
  debugger;
  const data = await response.json();
  debugger;
  return data.value;
}

export async function registerUser(userInfo : RegisterUser) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  debugger;
  try {
    const response = await fetch("https://610c159c66dd8f0017b76c6d.mockapi.io/Authentication", requestOptions);
    debugger;
    const data = await response.json();
    debugger;
    return data.value;
  } catch (error) {
    debugger;
    return error;
  }
}

