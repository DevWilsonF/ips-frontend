import {postData} from "./RestAxios"

export const postLogin = async(data)=>{
    const endpoint = `login/`;
    return await postData(endpoint,data)
  }