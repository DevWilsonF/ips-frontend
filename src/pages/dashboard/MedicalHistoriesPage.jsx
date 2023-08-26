import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function MedicalHistoriesPage() {
  return (
    <>
      <DashboardSection title={'Historias Medicas'}>
        <FilterData filters={[{text:'ID',type:'number'},{text:'Paciente',type:'text'}]}/>

        <table className='table table-stripped'>
          <thead>
            <tr>
              <th>ID</th>

              <th>Paciente</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>01</td>

              <td>Felipe Andrade</td>

              <td><button className='btn btn-primary'>Ver</button></td>
            </tr>
          </tbody>
        </table>

      </DashboardSection>
    </>
  )
}

export default MedicalHistoriesPage