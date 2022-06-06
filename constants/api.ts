export const BASE_URL ="http://ec2-3-235-188-136.compute-1.amazonaws.com:8888";

//AUTHENTICATE
export const LOGIN_API = "/Authentication/login";
export const REGISTER_API = "/Authentication/register";
export const FORGOT_PASSWORD_API = "/Authentication/ForgotPassword";
export const VERIFY_RESET_TOKEN = "/Authentication/verifyresetotp";
export const RESET_PASS="/Authentication/resetpass";

//NEWS
export const GETALLNEWS_API = "/NewsModel/get";
export const GETNEWS_API = "/NewsModel/get/";
export const ADDNEWS_API = "/NewsModel/add";
export const EDITNEWS_API = "/NewsModel/update/";
export const DELETENEWS_API = "/NewsModel/delete/";

//ServiceCategory
export const GETALLSERVICECATEGORY_API = "/ServiceCategory/get";
export const GETSERVICECATEGORY_API = "/ServiceCategory/get/";
export const GETSERVICECATEGORYBYPARENTID_API = "/ServiceCategory/getByParentId/";
export const ADDSERVICECATEGORY_API = "/ServiceCategory/add";
export const EDITSERVICECATEGORY_API = "/ServiceCategory/update/";
export const DELETESERVICECATEGORY_API = "/ServiceCategory/delete/";



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
export const VERIFY_RESET_TOKEN_URL = `${BASE_URL}${VERIFY_RESET_TOKEN}`;
export const RESET_PASS_URL = `${BASE_URL}${RESET_PASS}`;


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


//ServiceCategory
export const GETALLSERVICECATEGORY_URL = `${BASE_URL}${GETALLSERVICECATEGORY_API}`;
export const GETSERVICECATEGORY_URL = `${BASE_URL}${GETSERVICECATEGORY_API}`;
export const ADDSERVICECATEGORY_URL = `${BASE_URL}${ADDSERVICECATEGORY_API}`;
export const EDITSERVICECATEGORY_URL = `${BASE_URL}${EDITSERVICECATEGORY_API}`;
export const DELETESERVICECATEGORY_URL = `${BASE_URL}${DELETESERVICECATEGORY_API}`;
export const GETSERVICECATEGORYBYPARENTID_URL = `${BASE_URL}${GETSERVICECATEGORYBYPARENTID_API}`;


