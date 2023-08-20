import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function PatientsPage() {
  return (
    <DashboardSection title={'Pacientes'}>
      <FilterData/>
      
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Registrado</th>
            <th>DNI</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Felipe</td>
            <td>Andrade Cardenas</td>
            <td>19/08/2023</td>
            <td>1034536253</td>
            <td>3058153072</td>
            <td>fandradec03@gmail.com</td>
            <td><button className='btn btn-primary'>Ver</button></td>
          </tr>
        </tbody>
      </table>

    </DashboardSection>
  )
}

export default PatientsPage