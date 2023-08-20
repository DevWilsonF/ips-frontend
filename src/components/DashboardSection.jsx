import React from 'react'
import '../styles/DashboardSection.css'
function DashboardSection({ title, children }) {
  return (
    <div className='container-fluid mb-3 p-3 rounded-3 dashboard-section'>
      <h2>{title}</h2>
      {children}

    </div>
  )
}

export default DashboardSection