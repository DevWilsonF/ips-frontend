import React, { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getExams } from '../../api/Exams'
import Loading from '../../components/Loading'

function ExamsPage() {
  const [examsData, setExamsData] = useState([])
  const [loading, setloading] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [filtering, setFiltering] = useState(false)
  const filter = ({ text, filterValue }) => {
    if (text == '') {
      setFiltering(false)
    } else {
      setFiltering(true)
    }
    setFilterData(examsData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))

  }
  useEffect(() => {
    const fetchData = async () => {
      let data = await getExams()
      let newData = data.map(({ medicalExamsID, examType, PatientID, medicalExamsDate }) => ({ medicalExamsID, examType, PatientID, medicalExamsDate }))
      setExamsData(newData)
      setloading(false)


    }
    fetchData()




  }, [])
  return (

    <DashboardSection title={'Examenes'} header={<button className='btn btn-success'>Agregar Examen</button>}>
      <FilterData onFilter={filter} filters={[{ text: 'ID', type: 'number',value:'medicalExamsID' }, { text: 'Tipo', type: 'text' ,value:'examType'}, { text: 'Paciente', type: 'text' ,value:'PatientID_id'}, { text: 'Fecha', type: 'date' ,value:'medicalExamsDate'}]} />

      <Loading loading={loading}>

        <DataTable titles={['ID', 'Tipo', 'Paciente', 'Fecha']} filtering={filtering} filterData={filterData} data={examsData} actions={(id) => { return <button onClick={() => alert(id)} className='btn btn-primary'>Ver</button> }} />
      </Loading>


    </DashboardSection>
  )
}

export default ExamsPage