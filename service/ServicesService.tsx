import { ADDNEWS_URL, ADDSERVICECATEGORY_URL, DELETENEWS_URL, EDITNEWS_URL, GETALLNEWS_URL, GETSERVICECATEGORYBYPARENTID_URL } from "../constants/api";
import  axios from 'axios';
import { getUserFromDevice } from "./AccountService";

// //GET ALL NEWS
// export  async  function getServicesById(){
//   try {
//     const response = await axios.get(
//       GETALLNEWS_URL
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

//GET ALL NEWS
export  async  function getServicesByParentId(id:string){
  try {
    const url = GETSERVICECATEGORYBYPARENTID_URL + id;
    const response = await axios.get(
      url
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}



//ADD NEWS
export async function addService(service : ServiceModel) {
  const user = await getUserFromDevice();
  const token = user?.jwtToken;
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`},
    body: JSON.stringify(service)
  };
  debugger;
  const response = await fetch(ADDSERVICECATEGORY_URL, requestOptions);
  const data = await response.json();
  debugger;
  return data;
}

// //UPDATE NEWS
// export async function updateNews(news : Service,id:string) {
//   debugger;
//   const user = await getUserFromDevice();
//   const token = user?.jwtToken;
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify(news)
//   }
//   const url = `${EDITNEWS_URL}`+ id;

//   const response = await fetch(url, requestOptions);
//   const data = await response.json();
//   debugger;
//   return data;
// }


// //DELETE NEWS
// export async function deleteNews(id:String) {
//   const user = await getUserFromDevice();
//   const token = user?.jwtToken;
//   const requestOptions = {
//     method: 'POST',
//     headers: { 
//       'Authorization': `Bearer ${token}`},
//   };
//   const url = DELETENEWS_URL + id ;

//   const response = await fetch(url, requestOptions);
//   const data = await response.json();
//   debugger;
//   return data;
// }


export class ServiceModel{
  constructor(
      public title: string,
      public parentId: string,
      public url: string,
  )
  {}
}
