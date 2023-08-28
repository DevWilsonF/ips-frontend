import React, { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getAppointments } from '../../api/Appointments'
import Loading from '../../components/Loading'

function AppointmentsPage() {
    const [appointmentsData, setAppointmentsData] = useState([])
    const [loading, setloading] = useState(true)
    const [filterData, setFilterData] = useState([])
    const [filtering, setFiltering] = useState(false)
    const filter = ({ text, filterValue }) => {
        if (text == '') {
            setFiltering(false)
        } else {
            setFiltering(true)
        }
        setFilterData(appointmentsData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))

    }
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAppointments()
            console.log(data)
            let newData = data.map(({ appointmentID, employeeID, patientID, appointmentDate, appointmentTime, state }) => ({ appointmentID, employeeID, patientID, appointmentDate, appointmentTime, state}))
            console.log(newData)
            setAppointmentsData(newData)
            setloading(false)


        }
        fetchData()




    }, [])
    return (

        <DashboardSection title={'Citas'} header={<button className='btn btn-success'>Agendar Cita</button>}>
            <FilterData onFilter={filter} filters={[{ text: 'ID', type: 'number', value:'appointmentID' }, { text: 'Doctor', type: 'text', value:'employeeID' }, { text: 'Paciente', type: 'text', value:'patientID' }, { text: 'Fecha', type: 'date', value:'appointmentDate' }, { text: 'Hora', type: 'time', value:'appointmentTime' }]} />

            <Loading loading={loading}>

                <DataTable titles={['ID', 'Doctor', 'Paciente', 'Fecha', 'Hora', 'Estado']} filtering={filtering} filterData={filterData} data={appointmentsData} actions={(id) => { return <button onClick={() => alert(id)} className='btn btn-primary'>Ver</button> }} />
            </Loading>


        </DashboardSection>

    )
}

export default AppointmentsPage