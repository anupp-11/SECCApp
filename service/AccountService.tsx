import {  } from "../constants/api";


export async function authUser(email:string, pass:string) {
  debugger;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password:pass })
  };
  debugger;
  const response = await fetch('https://172.18.0.3:5001/User/authenticate', requestOptions);
  const data = await response.json();
  
    debugger;
   
    return data;
 
}

