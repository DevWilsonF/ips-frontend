import axios from "axios";

export const getMedicalHistories= async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/medicalHistoryList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}