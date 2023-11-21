import {postData} from "../api/rest_axios"


export const handleLogin= async(username,password,rol)=>{
  const endpoint= ""
  const data = {"username":username,"password":password,"rol":rol}
  try {
    const response = await postData(endpoint, data);
    sessionStorage.setItem("username", response.data.username);
    sessionStorage.setItem("token_access", response.data.access);
    sessionStorage.setItem("token_refresh", response.data.refresh);
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}