import config from "@/data/config";

const hostBackURL = `http://${config.urls.backURL}:${config.urls.backPort}/api/v1`;

const URLS =  {
    GET_ATMS_URL: `${hostBackURL}/atms/`,
    GET_OFFICES_URL: `${hostBackURL}/offices/`,
}

export default URLS;
