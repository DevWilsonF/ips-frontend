import {getData,postData} from "./RestAxios";

export const getPatients = async(dataFilter = "")=>{
  const endpoint = `patients/${dataFilter}`;
  return await getData(endpoint);
}
export const getPatient = async(id)=>{
  const endpoint = `patientsDetail/${id}`;
  return await getData(endpoint);
}
export const addPatient = async(data)=>{
  const endpoint = 'patients/'
  return await postData(endpoint,data)
}

  