import React ,{useState,useEffect}from "react";
import { Col, Row,Container,Card,Form,Button,Stack } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom';
import {ConsultationDisplay}from "../../components/dashboard/pruebaFiltrarDatos";
import MedicalHistoryDetails from "../../services/MedicalHistoryComponent";
import CardContainer from "../../components/CardComponent";
import {patientTranslate}from "../../utils/patientDictionary"

const MedicalHistoryDisplay = ()=>{
  const [data] = useOutletContext()
  const patientTranslateSpanish = patientTranslate()
  const orderData=["firstName","lastName","currentAge","gender","documentNumber","occupation"]
  const currentAge = () =>{
    const currentYear = new Date().getFullYear()
    const birthDateYear = new Date(data.birthDate).getFullYear()
    return currentYear - birthDateYear
  }
  return(
    <Container>
      <Row className="mb-4">
        <Col>
          <CardContainer title="Información Básica">
            <Row>
              {orderData.map((item,index)=>(
                <React.Fragment key={index}>
                  <Col md={6} lg={3}>
                    <Card.Title>{item === 'currentAge'? "Edad":patientTranslateSpanish[item]}:</Card.Title>
                  </Col>
                  <Col md={6} lg={3}>
                    <Card.Text>
                      {item === 'currentAge' ? currentAge() : data[item]}
                    </Card.Text>
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </CardContainer>
          </Col>
      </Row>
      <MedicalHistoryDetails id={data.PatientID}></MedicalHistoryDetails>
      <Row className="mb-4">
        <Col>
          <Card border="secondary" >
            <Card.Header className="text-center" as="h5">Historial de Consultas</Card.Header>
            <Card.Body>
              <ConsultationDisplay></ConsultationDisplay>
            </Card.Body>
          </Card>
          </Col>
      </Row>
    </Container>
  )
}
export default MedicalHistoryDisplay