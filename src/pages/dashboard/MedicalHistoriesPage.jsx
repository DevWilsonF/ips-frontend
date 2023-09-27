import { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getMedicalHistory } from '../../api/MedicalHistories'
import Loading from '../../components/Loading'
import DefaultBasePage from './DefaultBasePage'
import PatientCreateModal from '../../components/dashboard/modals/PatientCreateModal'

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
      
      <DefaultBasePage title={'Historias Medicas'} filterParameters={[{ text: 'ID', type: 'number', value: 'historyID' }, { text: 'Paciente', type: 'text', value: 'patientID' }]} tableTitles={['ID', 'Paciente']} orderDataTable={["historyID", "patientID" ]} actionsTableButton={(id)=><button onClick={() => alert(id)} className='btn btn-primary'>Ver</button>} fetchDataFunction={getMedicalHistory} postDataFunction={()=>{}} formModal={PatientCreateModal}/>
    </>
  )
}

export default MedicalHistoriesPage