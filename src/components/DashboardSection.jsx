import React from 'react'
import '../styles/DashboardSection.css'
function DashboardSection({ title, header, children }) {
  return (
    <div className='container-fluid mb-3 p-4 rounded-3 dashboard-section'>
      <div className="row d-flex align-items-center justify-content-between mb-5">
        <h2 className='col'>{title}</h2>
        <div className="col d-flex justify-content-end">{header}</div>

      </div>
      {children}

    </div>
  )
}

export default DashboardSection