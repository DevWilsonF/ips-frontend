import React,{useState} from "react";
import {ListGroup,CloseButton,Stack,Form,Button,Spinner,InputGroup} from 'react-bootstrap';
import { patchMedicalHistory } from "../api/MedicalHistories";
import { ImCheckmark } from "react-icons/im";


const UpdateCardBodyContent = ({ data, keyData, id, fetchData, exitOption }) => {
  const initialItems = data.split(",");
  const [items2, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState("");
  const [loading ,setLoading]= useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = inputValue.trim();
      setItems((prevItems) => [...prevItems, newItem]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const UpdateContentData = async () => {
    if (Array.isArray([...items2])) {
      const dataString = [...items2].join(",");
      const newData = { [keyData]: dataString };
      console.log(newData);
      try {
        setLoading(true)
        await patchMedicalHistory(id, newData);
        await fetchData();
        exitOption(keyData)
        setLoading(false)
      } catch (error) {
        console.error("No se pudo cargar los datos", error);
      }
    }
  };

  return (
    <>
      <ListGroup>
        {items2.map((item, index) => (
          <ListGroup.Item key={index}>
            <Stack direction="horizontal" gap={2}>
              {item}
              <CloseButton
                onClick={() => handleRemoveItem(index)}
                className="p-2 ms-auto"
              />
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br />
      <Stack direction="horizontal" gap={3}>
        <InputGroup className="mb-3">
          <Form.Control
            className="me-auto"
            placeholder="Añadir Nuevo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button variant="outline-success" onClick={handleAddItem}>
            <ImCheckmark />
          </Button>
        </InputGroup>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" disabled={loading} onClick={UpdateContentData}>
          {loading === true ? <><Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />Loading...</>:"Guardar Cambios"}
        </Button>
        <Button variant="secondary" disabled={loading} onClick={()=>{exitOption(keyData)}}>
          Cancelar
        </Button>
      </Stack>
      
    </>
  );
};

export default UpdateCardBodyContent;