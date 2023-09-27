import {getData,patchData} from "./RestAxios";

export const getMedicalHistory = async(id)=>{
  const endpoint = `medicalHistoryDetail/${id}`;
  return await getData(endpoint);
}
export const patchMedicalHistory = async(id,data)=>{
  const endpoint = `medicalHistoryDetail/${id}`;
  return await patchData(endpoint,data)
}