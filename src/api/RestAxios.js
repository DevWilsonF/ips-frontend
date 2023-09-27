// RestClient.js
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/'

export const getData= async (endpoint)=>{
  const URL = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export const postData = async (endpoint,data)=>{
  const URL = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.post(URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export const patchData = async(endpoint,data)=>{
  const URL = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.patch(URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}



