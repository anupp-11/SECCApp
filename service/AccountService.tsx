import AsyncStorage from '@react-native-async-storage/async-storage';
import {  } from "../constants/api";
import { AuthDetail } from "../models/BaseModel";

const USERDATA_STORAGE = `USERDATA_STORAGE`;

export async function saveUserToDevice(authDetail: AuthDetail) { 
  await AsyncStorage.setItem(USERDATA_STORAGE, JSON.stringify(authDetail));
  debugger;
  return authDetail;
}

export async function clearUserInfo() {
  await AsyncStorage.removeItem(USERDATA_STORAGE);
}

export async function getUserFromDevice() {
  const userString = await AsyncStorage.getItem(USERDATA_STORAGE);
  if (userString) {
    var user = JSON.parse(userString) as AuthDetail;
    return user;
  }
}
