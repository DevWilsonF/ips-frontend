import axios from "axios";

export const getConsultations= async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/consultationList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}