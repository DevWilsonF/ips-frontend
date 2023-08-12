import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </ul>

    </div>
  )
}

export default Navbar