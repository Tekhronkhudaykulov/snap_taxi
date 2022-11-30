import axios from "axios";

const baseUrl = `https://snap-taxi.herokuapp.com`;

const url = baseUrl + `/api`;

const api = axios.create({
  baseURL: url,
});

api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

export { baseUrl, api };
