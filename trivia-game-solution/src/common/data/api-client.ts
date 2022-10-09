import axios from "axios";

const baseApi = "https://opentdb.com/";

export const apiClient = axios.create({
  baseURL: baseApi,
  headers: {
    "Content-type": "application/json",
  },
});
