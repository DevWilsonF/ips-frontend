import axios from "axios";

export const getExams= async ()=>{
    const response = await axios.get('https://prevenirbackend.up.railway.app/medicalExamsList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}