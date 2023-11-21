import {postData} from "../api/RestAxios"

export const refreshToken=async()=>{
  const endpoint =""
  const token_refresh ={
    refresh: sessionStorage.getItem("token_refresh")
  }
  try{
    const response=await postData(endpoint,token_refresh);
    sessionStorage.setItem("token_access",response.data.access)
    return true
  }catch (error) {
    console.error("Error refreshing token:", error);
    sessionStorage.clear();
    return false;
  }
}