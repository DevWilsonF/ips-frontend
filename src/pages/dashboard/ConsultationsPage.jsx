import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function ConsultationsPage() {
    return (
        <DashboardSection title={'Consultas'} header={<button className='btn btn-success'>Agregar Consulta</button>}>
            <FilterData filters={[{ text: 'ID', type: 'number' }, { text: 'Doctor', type: 'text' }, { text: 'Paciente', type: 'text' }, { text: 'Fecha', type: 'date' }]} />

            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Doctor</th>
                        <th>Paciente</th>
                        <th>Fecha</th>


                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Carlos Camacho</td>
                        <td>Felipe Andrade</td>
                        <td>19/08/2023</td>



                        <td><button className='btn btn-primary'>Ver</button></td>
                    </tr>
                </tbody>
            </table>

        </DashboardSection>
    )
}

export default ConsultationsPage