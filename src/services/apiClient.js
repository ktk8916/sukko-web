import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const getApi = async (url) => {
  return axios({
    url: url,
    method: "GET",
  });
};
const postApi = async (url, data) => {
  return axios({
    url: url,
    method: "POST",
    data: data,
  });
};

export { getApi, postApi };
