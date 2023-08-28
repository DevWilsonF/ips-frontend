import axios from "axios";

export const getConsultations= async ()=>{
    const response = await axios.get('https://prevenirbackend.up.railway.app/consultationList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}