import {postData} from "./RestAxios"

export const postLogin = async(data)=>{
    const endpoint = `login/`;
    return await postData(endpoint,data)
  }

  
export const refreshToken=async()=>{
  const endpoint ="refresh/"
  const refresh_token = localStorage.getItem("token_refresh")
  const token_refresh ={"refresh": refresh_token}
  try{
    const response=await postData(endpoint,token_refresh);
    localStorage.setItem("token_access",response.access);
    return response.access
  }catch (error) {
    console.error("Error refreshing token:", error);
    throw error
  }
}