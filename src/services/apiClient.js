import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" && "http://localhost:8080";

const getApi = async (url) => {
  return axios({
    url: url,
    method: "GET",
  });
};

const putApi = async (url, data) => {
  return axios({
    url: url,
    method: "PUT",
    data: data,
  });
};

const deleteApi = async (url, data) => {
  return axios({
    url: url,
    method: "DELETE",
    data: data,
  });
};
const postApi = async (url, data) => {
  return axios({
    url: url,
    method: "POST",
    data: data,
  });
};

export { getApi, postApi, putApi, deleteApi };
