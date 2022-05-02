import {  } from "../constants/api";
import  axios from 'axios';


// export async function getNews() {
//   debugger;
//   // const requestOptions = {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({ username: email, password:pass })
//   // };
//   debugger;
//   const response = await fetch('https://172.18.0.3:5001/User/authenticate', requestOptions);
//   const data = await response.json();
  
//     debugger;
   
//     return data;
 
// }

export  async  function getNews(){
  debugger;
  const url = "https://610c159c66dd8f0017b76c6d.mockapi.io/news";
  const response = await axios.get<News[]>(
    url
  );
  debugger;
  return response.data;
}
// public string Title { get; set; }
// public string SubTitle { get; set; }
// public string NewsSnippet { get; set; } 
// public string ImageUrl { get; set; }
// public string NewsUrl { get; set; }
  


export class News{
  constructor(
      public id: string,
      public title: string,
      public subTitle: string,
      public newsSnippet: string,
      public imageUrl: string,
      public newsUrl: string
  )
  {}
}
