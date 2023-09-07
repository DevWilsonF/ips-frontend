import { getAppointments } from '../../api/Appointments'
import AppointmentCreateModal from '../../components/dashboard/modals/AppointmentCreateModal'
import DefaultBasePage from './DefaultBasePage'


function AppointmentsPage() {
  return (
    <>
      <DefaultBasePage title={'Citas'} addBtnTitle={'Agendar Cita'} tableTitles={['ID', 'Doctor', 'Paciente', 'Fecha', 'Hora', 'Estado']} orderDataTable={["appointmentID", "employeeID", "patientID", "appointmentDate", "appointmentTime", "state"]} actionsTableButton={(id) => <button onClick={() => alert(id)} className='btn btn-primary'>Ver</button>} fetchDataFunction={getAppointments} postDataFunction={() => { }} filterParameters={[{ text: 'ID', type: 'number', value: 'appointmentID' }, { text: 'Doctor', type: 'text', value: 'employeeID' }, { text: 'Paciente', type: 'text', value: 'patientID' }, { text: 'Fecha', type: 'date', value: 'appointmentDate' }, { text: 'Hora', type: 'time', value: 'appointmentTime' }]} formModal={AppointmentCreateModal} />

    </>

  )
}

export default AppointmentsPage