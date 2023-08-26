import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function EmployeesPage() {
  return (
    <>
    <DashboardSection title={'Total Empleados'}>
      <p>50</p>

    </DashboardSection>
    
    <DashboardSection title={'Empleados'} header={<button className='btn btn-success'>Agregar Empleado</button>}>
      <FilterData filters={[{text:'ID',type:'number'},{text:'Nombre',type:'text'}]}/>

    </DashboardSection>
    </>
  )
}

export default EmployeesPage