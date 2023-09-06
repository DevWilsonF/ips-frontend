import axios from "axios"

export const handleLogin = async (username,password)=>{
    const response = await axios.post('http://127.0.0.1:8000/login/',{username,password})
    alert(response)

}
export const handleRefresh = async()=>{

}