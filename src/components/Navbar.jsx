import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar({isLogued}) {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom border-bottom-dark shadow-sm fixed-top z-3" style={{backgroundColor:'#fff'}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}> <img src="/ips_logo.ico" alt="Prevenir-logo" width={30} height={24} /> </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={'nav-link'} aria-current="page" to={'/'}>Inicio</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className={`nav-link`} to={isLogued?'/dashboard/home':'/login'}>{isLogued?'Dashboard':'Login'}</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    
  )
}

export default Navbar