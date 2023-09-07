import axios from "axios";

export const getAppointments= async ()=>{
    const response = await axios.get('https://prevenirbackend.up.railway.app/appointmentList/')
    const jsonData =JSON.stringify(response.data)
    const data = JSON.parse(jsonData)
    return data
    

}