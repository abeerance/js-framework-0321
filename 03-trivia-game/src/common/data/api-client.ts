import axios from "axios";

const baseApiUrl = "https://opentdb.com/";

export const apiClient = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-type": "application/json",
  },
});
