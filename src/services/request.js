import axios from "axios";
import { API_CONSTS } from "../consts";

const api = axios.create({
  baseURL: API_CONSTS.baseUrl
});

export default async function request({
  url,
  method,
  requestData,
  headers = {}
}) {
  try {
    const { data } = await api({ method, url, headers, data: requestData });
    return data;
  } catch (error) {
    window.alert(error.response.data.errorMessage);
    throw error;
  }
}
