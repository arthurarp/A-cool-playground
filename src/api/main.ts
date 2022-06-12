import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://viacep.com.br/"
});

export default apiInstance;