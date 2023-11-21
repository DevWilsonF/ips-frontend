import { getConsultations } from '../../api/Consultations'
import DefaultBasePage from './DefaultBasePage'
import PatientCreateModal from '../../components/dashboard/modals/PatientCreateModal'
import { Container,Row ,Col,Placeholder,Card} from 'react-bootstrap'
import CardComponent from "../../components/CardComponent" 
import DisplayLoadData from '../../components/LoadingData'
function ConsultationsPage({data}) {
    data = data ?? DisplayLoadData()
    return (
        <Container>
                <Row >
                    <Col className='mb-3' lg={12}><CardComponent header={false}>datos{data}</CardComponent></Col>
                </Row>
                <Row >
                     <Col className='mb-3' sm={12}lg={4}><CardComponent header={false}>signos vitales{data}</CardComponent></Col>
                     <Col className='mb-3' sm={12}lg={8}><CardComponent header={false}>Diagnostico {data}</CardComponent></Col>
                </Row>
                <Row >
                    <Col className='mb-3' lg={12}><CardComponent header={false}>Tratamiento{data}</CardComponent></Col>
                </Row>
                <Row >
                    <Col className='mb-3' sm={12}lg={7}><CardComponent header={false}>Notas medicas{data}</CardComponent></Col>
                    <Col className='mb-3' sm={12}lg={5}><CardComponent header={false}>examenes{data}</CardComponent></Col>
                     
                </Row>

        </Container>
    )
}

export default ConsultationsPage