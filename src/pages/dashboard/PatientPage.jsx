import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPatient } from '../../api/Patients'
import DashboardTabsSection from '../../components/dashboard/DashboardTabsSection'
import DashboardSection from '../../components/dashboard/DashboardSection'
import Loading from '../../components/Loading'
import { Button, Input, Label } from 'reactstrap'


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

  const renderInfo = () => {
    return (
      <>
        <div className="row">
          <div className="col">

            <Label >Nombre</Label>
            <Input value={data.firstName} disabled></Input>

            <Label >Apellido</Label>
            <Input value={data.lastName} disabled></Input>
            <Label >Genero</Label>
            <Input value={data.gender} disabled></Input>

            <Label >Fecha de nacimiento</Label>
            <Input type='date' value={data.birthDate} disabled></Input>

            <Label >Tipo de documento</Label>
            <Input value={data.documentType} disabled></Input>

            <Label >Documento</Label>
            <Input value={data.documentNumber} disabled></Input>



          </div>


          <div className="col">

            <Label >Nacionalidad</Label>
            <Input value={data.nationality} disabled></Input>

            <Label >Estado Civil</Label>
            <Input value={data.firstName} disabled></Input>

            <Label >Fecha registrado</Label>
            <Input value={data.registrationDate} disabled></Input>

            <Label >Telefono</Label>
            <Input value={data.phone} disabled></Input>
            <Label >Email</Label>
            <Input value={data.email} disabled></Input>

            <Label >Ocupacion</Label>
            <Input value={data.occupation} disabled></Input>


            <Label >Tipo de seguro</Label>
            <Input value={data.insuranceType} disabled></Input>

          </div>


        </div >


      </>)
  }

  return (
    <>
      <Loading loading={loading}>
        <DashboardSection title={`${data.firstName} ${data.lastName}`}>
          <DashboardTabsSection tabs={['Informacion', 'Historia Medica', 'Consultas', 'Citas Medicas']} content={[renderInfo(), <h1>2</h1>]} />

        </DashboardSection>

      </Loading>

    </>
  )
}

export default PatientPage