import { getData } from "./RestAxios";

export const getConsultations= async (filter ="")=>{
    const endpoint = `consultationList/${filter}`;
  return await getData(endpoint);
}
