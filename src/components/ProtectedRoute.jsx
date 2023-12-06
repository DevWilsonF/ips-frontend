
import { Outlet, Navigate } from 'react-router-dom'
import {handleAuth} from "../services/HandleAuth"
import {React,useState,useEffect} from 'react'
function ProtectedRoute({isAllowed,redirectTo ="/login",children}) {
  // if(!isAllowed){
  //   return <Navigate to={redirectTo}/>
  // }
  // return children ? children : <Outlet/>
  return isAllowed?(<><Navigate to={"/dashboard/patients"}/><Outlet/></>):<Navigate to={"/login"}/>
}

export default ProtectedRoute