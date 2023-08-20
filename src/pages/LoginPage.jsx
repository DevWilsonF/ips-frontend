import React from 'react'
import '../styles/LoginPage.css'
import { Navigate } from 'react-router-dom'
function LoginPage({isLogued}) {
  document.title = 'Prevenir IPS | Login'
  if(isLogued){
    return <Navigate to={'/dashboard/home'}/>

  }
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 70px)'}}>
      <div className="d-flex flex-column justify-content-center shadow-lg rounded-4 p-3 login">
        <h1>Login</h1>
        <form action="">
          <label className='form-label' htmlFor="name">Nombre:</label>
          <input className='form-control' type="text" id='name' />
          <label className='form-label' htmlFor="name">Contraseña:</label>
          <input className='form-control mb-4' type="password" id='name' />
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage