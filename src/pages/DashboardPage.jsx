import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftNavbar from '../components/LeftNavbar'
import '../styles/LeftNavbar.css'
function DashboardPage() {
  return (
    <>
    {/* Left navbar */}
    <LeftNavbar/>
    {/* content */}
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default DashboardPage