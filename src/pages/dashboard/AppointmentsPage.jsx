import React from 'react'
import DashboardSection from '../../components/DashboardSection'
import FilterData from '../../components/FilterData'

function AppointmentsPage() {
    return (

        <DashboardSection title={'Citas'}header={<button className='btn btn-success'>Agendar Cita</button>}>
            <FilterData filters={[{ text: 'ID', type: 'number' },{text:'Doctor',type:'text'},{text:'Paciente',type:'text'},{text:'Fecha',type:'date'},{text:'Hora',type:'time'}]} />
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Doctor</th>
                        <th>Paciente</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Carlos Camacho</td>
                        <td>Felipe Andrade</td>
                        <td>19/08/2023</td>
                        <td>6:40 PM</td>
                        <td>Pendiente</td>

                        <td><button className='btn btn-primary'>Ver</button></td>
                    </tr>
                </tbody>
            </table>

        </DashboardSection>

    )
}

export default AppointmentsPage