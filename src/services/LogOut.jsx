import { Navigate } from 'react-router-dom'
import { handleAuth } from './HandleAuth';
export const logOut = ()=>{
  localStorage.clear();
}