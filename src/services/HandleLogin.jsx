import {postData} from "../api/RestAxios"

export const handleLogin= async(username,password)=>{
  const endpoint= "login/"
  const data = {"username":username,"password":password}
  try {
    const response = await postData(endpoint, data);
    localStorage.setItem("token_access", response.access);
    localStorage.setItem("token_refresh", response.refresh);
  } catch (error) {
    console.error("Error during login:", error);
  }
}