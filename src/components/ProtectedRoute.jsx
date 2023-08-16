import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute({isAllowed,redirectTo ="/login",children}) {

  if(!isAllowed){
    return <Navigate to={redirectTo}/>
  }

  return children ? children : <Outlet/>
}

export default ProtectedRoute