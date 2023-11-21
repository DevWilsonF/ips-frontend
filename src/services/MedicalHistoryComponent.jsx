import React,{useState,useEffect} from "react";
import {getMedicalHistory} from "../api/MedicalHistories";
import { Col, Row,Container,Card,Form,Button,Stack } from "react-bootstrap";
import UpdateCardBodyContent from "../components/ModalContentWithUpdateLogic";
import CardContainer from "../components/CardComponent";


const MedicalHistoryDetails = ({ id }) => {
  const [data, setData] = useState([]);
  const orderData = { allergies: 'Alergias', surgeries: 'Cirugias', previousDiseases: 'Diagnostico Previo' };

  // Crear un estado para cada botón individual
  const [StatusButton, setStatusButton] = useState({
    allergies: true,
    surgeries: true,
    previousDiseases: true,
  });

  const fetchData = async () => {
    const medicalHistoryData = await getMedicalHistory(id);
    setData(medicalHistoryData || {});
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const eventOnClickChangeStatus = (key) => {
    setStatusButton((prevStatusButton) => ({
      ...prevStatusButton,
      [key]: prevStatusButton[key] === true ? false : true,
    }));
  };

  return (
    <Row className="mb-4">
      {Object.entries(orderData).map(([key, value], index) => {
        const sizeCol = key === 'previousDiseases' ? 12 : 6;
        const dataString = new String(data[key] || '');
        const keyData = new String(key||'')
        const buttonSwitchOption=()=>{
          return(
            <Stack direction="horizontal" gap={3}>
              {value}
              {StatusButton[key]===true?
              <Button
                className="p-2 ms-auto"
                variant="primary"
                onClick={() => eventOnClickChangeStatus(key)} // Pasar la clave (key) del botón
              >Editar</Button>:<></>}
              
            </Stack>
          )
        }

        return (
          <Col key={index} md={12} lg={sizeCol} className="mb-4">
            <CardContainer title={buttonSwitchOption()}>
              {StatusButton[key] === true? dataString.split(",").map((element,index)=>(<li key={index}>{element}</li>)
              ):<UpdateCardBodyContent data={dataString} keyData={keyData} id={id} fetchData={fetchData} exitOption={eventOnClickChangeStatus}></UpdateCardBodyContent>}
              
            </CardContainer>
          </Col>
        );
      })}
    </Row>
  );
};

export default MedicalHistoryDetails;

