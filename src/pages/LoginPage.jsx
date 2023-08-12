import React from 'react'
import '../styles/LoginPage.css'
function LoginPage() {
  document.title = 'Prevenir IPS | Login'
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 60px)', paddingTop:'60px' }}>
      <div className="d-flex flex-column justify-content-center shadow rounded p-3 border login">
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