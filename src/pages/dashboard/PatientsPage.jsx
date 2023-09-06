import React, { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import { getPatients, addPatient ,getPatient} from "../../api/Patients";
import Loading from '../../components/Loading';
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PatientCreateModal from '../../components/dashboard/modals/PatientCreateModal';
import { Link, Navigate } from 'react-router-dom';

function PatientsPage() {
  const [modal, setModal] = useState(false);

  const [patientsData, setPatientsData] = useState([])
  const [loading, setloading] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [filtering, setFiltering] = useState(false)
  const toggle = () => setModal(!modal);
  const filter = ({ text, filterValue }) => {
    if (text == '') {
      setFiltering(false)
    } else {
      setFiltering(true)
    }
    setFilterData(patientsData.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))
    console.log(filterData)

  }
  const loadData = async () => {
    setloading(true)
    
    let data = await getPatients()
    let newData = data.map(({ PatientID, firstName, lastName, registrationDate, documentNumber, phone, email }) => ({ PatientID, firstName, lastName, registrationDate, documentNumber, phone, email }))
    setPatientsData(newData)
    setloading(false)

  }
  const addPatientData = async (data) => {
    let response = await addPatient(data)
    toggle()
    loadData()
  }
  useEffect(() => {

    loadData()


  }, [])

  return (
    <>
      <PatientCreateModal toggle={toggle} modal={modal} onClick={addPatientData}/>

      <DashboardSection title={'Pacientes'} header={
        <button onClick={toggle} className='btn btn-success'>Agregar Paciente</button>}>
        <FilterData onFilter={filter} filters={[{ text: 'ID', value: 'PatientID', type: 'number' }, { text: 'Nombre', value: 'firstName', type: 'text' }, { text: 'Apellido', value: 'lastName', type: 'text' }, { text: 'Registrado', value: 'registrationDate', type: 'date' }, { text: 'DNI', value: 'documentNumber', type: 'number' }, { text: 'Celular', value: 'phone', type: 'number' }, { text: 'Email', value: 'email', type: 'email' }]} />


        <Loading loading={loading}>
          <DataTable titles={['ID', 'Nombre', 'Apellido', 'Registrado', 'DNI', 'Celular', 'Email']} filtering={filtering} filterData={filterData} data={patientsData} actions={(id) => { return <Link className='btn btn-primary' to={`${id}`}>Ver</Link> }} />

        </Loading>


      </DashboardSection>
    </>
  )
}

export default PatientsPage