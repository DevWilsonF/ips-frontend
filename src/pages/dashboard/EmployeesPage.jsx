import React, { useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'

function EmployeesPage() {

  const [employeesData, setEmployeesData] = useState([])
  const [loading, setloading] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [filtering, setFiltering] = useState(false)
  const filter = ({ text, filterValue }) => {
      if (text == '') {
          setFiltering(false)
      } else {
          setFiltering(true)
      }
      setFilterData(employeesData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))

  }

  return (
    <>
    <DashboardSection title={'Total Empleados'}>
      <p>50</p>

    </DashboardSection>
    
    <DashboardSection title={'Empleados'} header={<button className='btn btn-success'>Agregar Empleado</button>}>
      <FilterData onFilter={filter} filters={[{text:'ID',type:'number'},{text:'Nombre',type:'text'}]}/>

    </DashboardSection>
    </>
  )
}

export default EmployeesPage