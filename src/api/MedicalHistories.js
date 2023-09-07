import axios from "axios";

export const getMedicalHistories= async ()=>{
    const response = await axios.get('https://prevenirbackend.up.railway.app/medicalHistoryList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}