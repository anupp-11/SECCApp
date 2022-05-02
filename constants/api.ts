

export const BASE_URL ="https://ea24-110-44-125-147.in.ngrok.io";


//AUTHENTICATE
export const LOGIN_API = "/Authentication/login";
export const REGISTER_API = "/Authentication/register";
export const FORGOT_PASSWORD_API = "/Authentication/ForgotPassword";


//NEWS
export const GETALLNEWS_API = "/NewsModel/get";
export const GETNEWS_API = "/NewsModel/get/";
export const ADDNEWS_API = "/NewsModel/add";
export const EDITNEWS_API = "/NewsModel/update/";
export const DELETENEWS_API = "/NewsModel/delete/";



//AUTHENTICATE URLS
export const LOGIN_URL = `${BASE_URL}${LOGIN_API}`;
export const REGISTER_URL = `${BASE_URL}${REGISTER_API}`;
export const FORGOT_PASSWORD_URL = `${BASE_URL}${FORGOT_PASSWORD_API}`;


//NEWS URLS
export const GETALLNEWS_URL = `${BASE_URL}${GETALLNEWS_API}`;
export const GETNEWS_URL = `${BASE_URL}${GETNEWS_API}`;
export const ADDNEWS_URL = `${BASE_URL}${ADDNEWS_API}`;
export const EDITNEWS_URL = `${BASE_URL}${EDITNEWS_API}`;
export const DELETENEWS_URL = `${BASE_URL}${DELETENEWS_API}`;

