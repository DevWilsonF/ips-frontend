import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function ExamsPage() {
  return (
    <DashboardSection title={'Examenes'} header={<button className='btn btn-success'>Agregar Examen</button>}>
      <FilterData filters={[{text:'ID',type:'number'},{text:'Tipo',type:'text'},{text:'Paciente',type:'text'},{text:'Fecha',type:'date'}]}/>

      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Paciente</th>
            <th>Fecha</th>


            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Diagnosis</td>

            <td>Felipe Andrade</td>
            <td>19/08/2023</td>



            <td><button className='btn btn-primary'>Ver</button></td>
          </tr>
        </tbody>
      </table>

    </DashboardSection>
  )
}

export default ExamsPage