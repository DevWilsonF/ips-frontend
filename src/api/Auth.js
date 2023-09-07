import axios from "axios"

export const handleLogin = async (username,password)=>{
    const response = await axios.post('https://prevenirbackend.up.railway.app/login/',{username,password})
    alert(response)

}
export const handleRefresh = async()=>{

}