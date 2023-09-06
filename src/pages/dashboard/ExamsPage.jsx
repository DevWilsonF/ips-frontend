import { getExams } from '../../api/Exams'
import DefaultBasePage from './DefaultBasePage'
import PatientCreateModal from '../../components/dashboard/modals/PatientCreateModal'

function ExamsPage() {

  return (
    
    <>
    
    <DefaultBasePage title={'Examenes'} addBtnTitle={'Agregar Examen'} filterParameters={[{ text: 'ID', type: 'number',value:'medicalExamsID' }, { text: 'Tipo', type: 'text' ,value:'examType'}, { text: 'Paciente', type: 'text' ,value:'PatientID_id'}, { text: 'Fecha', type: 'date' ,value:'medicalExamsDate'}]} tableTitles={['ID', 'Tipo', 'Paciente', 'Fecha']} orderDataTable={["medicalExamsID", "examType", "PatientID", "medicalExamsDate"]} actionsTableButton={(id)=><button onClick={() => alert(id)} className='btn btn-primary'>Ver</button>} fetchDataFunction={getExams} postDataFunction={()=>{}} formModal={PatientCreateModal} />
    </>
  )
}

export default ExamsPage