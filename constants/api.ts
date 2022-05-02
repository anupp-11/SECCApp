

export const BASE_URL ="http://0.0.0.0:5001/";


//AUTHENTICATE
export const LOGIN_API = "/Authenticate/Login";
export const REGISTER_API = "/Authenticate/Register";
export const FORGOT_PASSWORD_API = "/Authenticate/ForgotPassword";

//NEWS
export const GETALLNEWS_API = "/News/get";
export const GETNEWS_API = "/News/get/";
export const ADDNEWS_API = "/News/add";
export const EDITNEWS_API = "/News/update/";
export const DELETENEWS_API = "/News/delete/";



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

