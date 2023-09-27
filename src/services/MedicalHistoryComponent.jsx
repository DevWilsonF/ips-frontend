import React,{useState,useEffect} from "react";
import {getMedicalHistory} from "../api/MedicalHistories";
import { Col, Row,Container,Card,Form,Button,Stack } from "react-bootstrap";
import ModalComponent from "../components/ModalContainer";
import ShowOptionCardContent from "../components/ModalContentWithUpdateLogic";
import CardContainer from "../components/CardComponent";


const MedicalHistoryDetails = ({ id }) => {
  const [data, setData] = useState([]);
  const orderData = { allergies: 'Alergias', surgeries: 'Cirugias', previousDiseases: 'Diagnostico Previo' };

  // Crear un estado para cada botón individual
  const [buttonNames, setButtonNames] = useState({
    allergies: 'Editar',
    surgeries: 'Editar',
    previousDiseases: 'Editar',
  });

  const fetchData = async () => {
    const medicalHistoryData = await getMedicalHistory(id);
    setData(medicalHistoryData || {});
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Función para cambiar el nombre del botón específico
  const eventOnClickChangeOption = (key) => {
    setButtonNames((prevButtonNames) => ({
      ...prevButtonNames,
      [key]: prevButtonNames[key] === 'Editar' ? 'Salir' : 'Editar',
    }));
  };

  return (
    <Row className="mb-4">
      {Object.entries(orderData).map(([key, value], index) => {
        const sizeCol = key === 'previousDiseases' ? 12 : 6;
        const dataString = new String(data[key] || '');
        const splitData = dataString.split(',');
        const buttonSwitchOption=()=>{
          return(
            <Stack direction="horizontal" gap={3}>
              {value}
              <Button
                className="p-2 ms-auto"
                variant="primary"
                onClick={() => eventOnClickChangeOption(key)} // Pasar la clave (key) del botón
              >
                {buttonNames[key]} 
              </Button>
            </Stack>
          )
        }

        return (
          <Col key={index} md={12} lg={sizeCol} className="mb-4">
            <CardContainer title={buttonSwitchOption()}>
              <ShowOptionCardContent data={splitData} option={buttonNames[key]} dataKey={key} id={id} updateData={fetchData}></ShowOptionCardContent>
            </CardContainer>
          </Col>
        );
      })}
    </Row>
  );
};

export default MedicalHistoryDetails;

