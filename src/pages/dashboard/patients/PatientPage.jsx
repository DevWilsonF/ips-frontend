import { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useParams } from 'react-router-dom'
import { getPatient } from '../../../api/Patients'
import DashboardTabsSection from '../../../components/dashboard/DashboardTabsSection'
import DashboardSection from '../../../components/dashboard/DashboardSection'
import Loading from '../../../components/Loading'
import { Button, Input, Label } from 'reactstrap'
import PatientInfoPage from './PatientInfoPage'


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
        <DashboardSection title={`${data.firstName} ${data.lastName}`}>

          <DashboardTabsSection tabs={[{ info: 'Informacion', url: 'info' }, { info: 'Historia Medica', url: 'medical-history' }, { info: 'Consultas', url: 'consultations' }, { info: 'Citas Medicas', url: 'appointments' }]
          } content={<Outlet context={[data]} />} />



        </DashboardSection>

      </Loading>

    </>
  )
}

export default PatientPage