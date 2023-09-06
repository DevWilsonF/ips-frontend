import { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getMedicalHistories } from '../../api/MedicalHistories'
import Loading from '../../components/Loading'

function MedicalHistoriesPage() {
  const [medicalHistoryData, setMedicalHistoryData] = useState([])
  const [loading, setloading] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [filtering, setFiltering] = useState(false)
  const filter = ({ text, filterValue }) => {
    if (text == '') {
      setFiltering(false)
    } else {
      setFiltering(true)
    }
    setFilterData(medicalHistoryData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))

  }
  useEffect(() => {
    const fetchData = async () => {
      let data = await getMedicalHistories()
      let newData = data.map(({ PatientID, firstName }) => ({ PatientID, firstName }))
      setMedicalHistoryData(newData)
      setloading(false)


    }
    fetchData()




  }, [])
  return (
    <>
      <DashboardSection title={'Historias Medicas'}>
        <FilterData onFilter={filter} filters={[{ text: 'ID', type: 'number', value: 'historyID' }, { text: 'Paciente', type: 'text', value: 'patientID' }]} />

        <Loading loading={loading}>
          <DataTable titles={['ID', 'Paciente', ]} filtering={filtering} filterData={filterData} data={medicalHistoryData} actions={(id) => { return <button onClick={() => alert(id)} className='btn btn-primary'>Ver</button> }} />

        </Loading>


      </DashboardSection>
    </>
  )
}

export default MedicalHistoriesPage