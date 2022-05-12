import { ADDNEWS_URL, DELETENEWS_URL, EDITNEWS_URL, GETALLNEWS_URL } from "../constants/api";
import  axios from 'axios';
import { getUserFromDevice } from "./AccountService";

//GET ALL NEWS
export  async  function getNews(){
  try {
    const response = await axios.get(
      GETALLNEWS_URL
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//ADD NEWS
export async function addNews(news : News) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify(news)
  };
  const response = await fetch(ADDNEWS_URL, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

//UPDATE NEWS
export async function updateNews(news : News,id:string) {
  debugger;
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(news)
  }
  const url = `${EDITNEWS_URL}`+ id;

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}


//DELETE NEWS
export async function deleteNews(id:String) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`},
  };
  const url = DELETENEWS_URL + id ;

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}


export class News{
  constructor(
      public title: string,
      public subTitle: string,
      public newsSnippet: string,
      public imageUrl: string,
      public newsUrl: string
  )
  {}
}
