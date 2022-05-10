export const BASE_URL ="https://2fc5-120-18-7-83.au.ngrok.io";

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

//FundRaisingCampaign
export const GETALLDONATIONS_API = "/FundRaisingCampaign/get";
export const GETDONATIONS_API = "/FundRaisingCampaign/get/";
export const ADDDONATIONS_API = "/FundRaisingCampaign/add";
export const EDITDONATIONS_API = "/FundRaisingCampaign/update/";
export const DELETEDONATIONS_API = "/FundRaisingCampaign/delete/";

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

////FundRaisingCampaignUrls
export const GETALLDONATIONS_URL = `${BASE_URL}${GETALLDONATIONS_API}`;
export const GETDONATIONS_URL = `${BASE_URL}${GETDONATIONS_API}`;
export const ADDDONATIONS_URL = `${BASE_URL}${ADDDONATIONS_API}`;
export const EDITDONATIONS_URL = `${BASE_URL}${EDITDONATIONS_API}`;
export const DELETEDONATIONS_URL = `${BASE_URL}${DELETEDONATIONS_API}`;


