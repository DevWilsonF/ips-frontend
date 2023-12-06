import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftNavbar from '../../components/dashboard/LeftNavbar'
import '../../styles/DashboardPage.css'
function DashboardPage() {
  return (
    <>
    <LeftNavbar/>
    <div className='content p-4'>
      <Outlet/>
    </div>
    </>
  )
}

export default DashboardPage