import { ADDDONATIONS_API, ADDNEWS_URL, DELETEDONATIONS_URL, DELETENEWS_URL, GETALLDONATIONS_URL, GETALLNEWS_URL } from "../constants/api";
import  axios from 'axios';
import { getUserFromDevice } from "./AccountService";



//GET ALL NEWS
export  async  function getDonations(){
  try {
    const response = await axios.get(
      GETALLDONATIONS_URL
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//ADD NEWS
export async function addDonation(donation : Donation) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify(donation)
  };
  const response = await fetch(ADDDONATIONS_API, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

//DELETE NEWS
export async function deleteDonation(id:String) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`},
  };
  const url = DELETEDONATIONS_URL + id ;

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}


export class Donation{
  constructor(
      public title: string,
      public description: string,
      public imageUrl: string,
      public donateBtnUrl: string
  )
  {}
}
