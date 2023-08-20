import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function EmployeesPage() {
  return (
    <>
    <DashboardSection title={'Total Empleados'}>
      <p>50</p>

    </DashboardSection>
    <DashboardSection title={'Empleos'}></DashboardSection>
    <DashboardSection title={'Empleados'}>
      <FilterData></FilterData>

    </DashboardSection>
    </>
  )
}

export default EmployeesPage