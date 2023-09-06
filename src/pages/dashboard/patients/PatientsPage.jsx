import { getPatients, addPatient } from "../../../api/Patients";
import PatientCreateModal from '../../../components/dashboard/modals/PatientCreateModal';
import { Link, } from 'react-router-dom';
import DefaultBasePage from '../DefaultBasePage';

function PatientsPage() {

  return (
    <>
      <DefaultBasePage title={'Pacientes'} addBtnTitle={'Agregar Paciente'} tableTitles={['ID', 'Nombre', 'Apellido', 'Registrado', 'DNI', 'Telefono', 'Email']} orderDataTable={["PatientID", "firstName", "lastName", "registrationDate", "documentNumber", "phone", "email"]} actionsTableButton={(id) => <Link className='btn btn-primary' to={`${id}/info`}>Ver</Link>} fetchDataFunction={getPatients} postDataFunction={addPatient} filterParameters={[{ text: 'ID', value: 'PatientID', type: 'number' }, { text: 'Nombre', value: 'firstName', type: 'text' }, { text: 'Apellido', value: 'lastName', type: 'text' }, { text: 'Registrado', value: 'registrationDate', type: 'date' }, { text: 'DNI', value: 'documentNumber', type: 'number' }, { text: 'Celular', value: 'phone', type: 'number' }, { text: 'Email', value: 'email', type: 'email' }]} formModal={PatientCreateModal} />
    </>
  )
}

export default PatientsPage