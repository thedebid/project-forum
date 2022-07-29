import axios from "axios";

const BaseURL = "http://localhost:3001";
const http = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

const getHeaders = () => {
  let headerOptions = {
    "Content-Type": "application/json",
  };

  return headerOptions;
};

function GET(url, params) {
  return http.get(url, {
    headers: getHeaders(),
    params: params,
  });
}

function POST(url, data) {
  return http.post(url, data, {
    headers: getHeaders(),
    params: {},
  });
}

function PUT(url, data) {
  return http.put(url, data, { headers: getHeaders(), params: {} });
}
function REMOVE(url) {
  return http.delete(url, { headers: getHeaders() });
}
const axiosInstance = {
  GET,
  POST,
  PUT,
  REMOVE,
};

export default axiosInstance;
