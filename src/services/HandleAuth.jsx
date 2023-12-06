import {React,useState,useEffect} from 'react'
import { refreshToken } from "../api/Auth";

export const handleAuth = ()=>{
  if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null){
    return false
  }else{
    return true
  }
}

