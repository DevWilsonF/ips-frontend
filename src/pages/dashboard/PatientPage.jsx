import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getPatient } from '../../api/Patients'
import DashboardTabsSection from '../../components/dashboard/DashboardTabsSection'
import DashboardSection from '../../components/dashboard/DashboardSection'
import Loading from '../../components/Loading'
import { Card} from 'react-bootstrap'


function PatientPage() {
  let { id } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    let data = await getPatient(id)
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>

      
      <Loading loading={loading}>
        <DashboardTabsSection tabs={[{ info: 'Información', url: 'info' }, { info: 'Historia Medica', url: 'medical-history' }, { info: 'Citas Medicas', url: 'appointments' }]
          } content={<Outlet context={[data]} />} />
      </Loading>
      

    </>
  )
}

export default PatientPage