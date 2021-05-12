import axios from "axios";

const API = axios.create({
  baseURL: "https://cb2e93d94a6b.ngrok.io/",
});

export default API;
