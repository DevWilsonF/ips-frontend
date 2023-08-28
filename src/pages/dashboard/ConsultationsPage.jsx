import React, { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getConsultations } from '../../api/Consultations'
import Loading from '../../components/Loading'

function ConsultationsPage() {
    const [consultationsData, setConsultationsData] = useState([])
    const [loading, setloading] = useState(true)
    const [filterData, setFilterData] = useState([])
    const [filtering, setFiltering] = useState(false)
    const filter = ({ text, filterValue }) => {
        if (text == '') {
            setFiltering(false)
        } else {
            setFiltering(true)
        }
        setFilterData(consultationsData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))

    }
    useEffect(() => {
        const fetchData = async () => {
            let data = await getConsultations()
            let newData = data.map(({ consultationID, employeeID, patientID,consultationDate }) => ({ consultationID, employeeID, patientID,consultationDate }))
            setConsultationsData(newData)
            setloading(false)


        }
        fetchData()




    }, [])
    return (
        <DashboardSection title={'Consultas'} header={<button className='btn btn-success'>Agregar Consulta</button>}>
            <FilterData onFilter={filter} filters={[{ text: 'ID', type: 'number',value:'consultationID' }, { text: 'Doctor', type: 'text',value:'employeeID' }, { text: 'Paciente', type: 'text',value:'patientID' }, { text: 'Fecha', type: 'date',value:'consultationDate' }]} />

            <Loading loading={loading} >
                <DataTable titles={['ID', 'Doctor', 'Paciente', 'Fecha']} filtering={filtering} filterData={filterData} data={consultationsData} actions={(id) => { return <button onClick={() => alert(id)} className='btn btn-primary'>Ver</button> }} />

            </Loading>


        </DashboardSection>
    )
}

export default ConsultationsPage