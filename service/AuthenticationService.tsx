import { LOGIN_URL, REGISTER_URL } from "../constants/api";
import { RegisterUser } from "../models/BaseModel";


export async function authUser(email:string, pass:string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password:pass })
  };
  const response = await fetch(LOGIN_URL, requestOptions);
  const data = await response.json();
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

