import axios from "axios";
//For Development Mode
const BASE_URL = "http://127.0.0.1:8080";

export default axios.create({
  baseURL: BASE_URL,
});

