import {getData,postData} from "./RestAxios";


export const getMedicalHistories= async ()=>{
  const endpoint = 'patients/';
  return await getData(endpoint);
}
export const getMedicalHistory = async(id)=>{
  const endpoint = `medicalHistoryDetail/${id}`;
  return await getData(endpoint);
}