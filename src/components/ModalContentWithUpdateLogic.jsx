import React,{useState} from "react";
import {ListGroup,CloseButton,Stack,Form,Button,Ratio,InputGroup} from 'react-bootstrap';
import { patchMedicalHistory } from "../api/MedicalHistories";
import { GoCheck } from "react-icons/go";
import { ImCheckmark } from "react-icons/im";


const ShowOptionCardContent =({data,option,dataKey,id,updateData})=>{
  
  
  const cardBody = option != "Editar" && Array.isArray(data)? (data)=>{
    const [items,setItems] = useState(data)
    const [inputValue,setInputValue]= useState("");
    const handleInputChange =(e)=>{
      setInputValue(e.target.value)
    }
    const handleAddItem = ()=>{
      if (inputValue !== "") {
        const newItem = inputValue.trim();
        setItems([...items, newItem]);
        setInputValue("");
        UpdateContentData([...items, newItem],dataKey);
      }
    }
    const handleRemoveItem=(index)=>{
      const newItems = [...items]
      newItems.splice(index,1);
      setItems(newItems)
      UpdateContentData(newItems,dataKey);
    }
    const UpdateContentData = async (dataValue,dataKey)=>{
      if(Array.isArray(dataValue)){
        const dataString = dataValue.join(",");
        const data={};
        data[dataKey]= dataString;
        try{
          await Promise.all([patchMedicalHistory(id,data),updateData()]) 
        }catch(error){
          console.error("no se pudo cargar los datos",error)
        }
      }
    }
    return(
      <>
      <ListGroup>
        {items.map((item,index)=>(
          <ListGroup.Item key={index}>
          <Stack direction="horizontal" gap={2}>
              {item}<CloseButton onClick={() => handleRemoveItem(index)} className="p-2 ms-auto" />
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
              onChange={handleInputChange} />
            <Button  variant="outline-success" onClick={handleAddItem}>
              <ImCheckmark></ImCheckmark>
            </Button>
          </InputGroup>
        </Stack>
        <Button variant="primary" >Guardar Cambios</Button>
      </>
    )}:(data)=>(
      
      <>{data.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}</>
    )
  return(
        <ListGroup>
          {cardBody(data)}
        </ListGroup>
  )
}
export default ShowOptionCardContent;