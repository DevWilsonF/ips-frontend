import { getConsultations } from '../../api/Consultations'
import DefaultBasePage from './DefaultBasePage'
import PatientCreateModal from '../../components/dashboard/modals/PatientCreateModal'

function ConsultationsPage() {   
    return (
        <>
            <DefaultBasePage title={'Consultas'} addBtnTitle={'Agregar Consulta'} tableTitles={['ID', 'Doctor', 'Paciente', 'Fecha']} orderDataTable={["consultationID", "employeeID", "patientID", "consultationDate"]} actionsTableButton={(id)=><button onClick={() => alert(id)} className='btn btn-primary'>Ver</button>} filterParameters={[{ text: 'ID', type: 'number', value: 'consultationID' }, { text: 'Doctor', type: 'text', value: 'employeeID' }, { text: 'Paciente', type: 'text', value: 'patientID' }, { text: 'Fecha', type: 'date', value: 'consultationDate' }]} fetchDataFunction={getConsultations} postDataFunction={()=>{}} formModal={PatientCreateModal} />
        </>
    )
}

export default ConsultationsPage