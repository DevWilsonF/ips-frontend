import React from "react";
import { Col, Row,Container,Card,Form,Button,Stack } from "react-bootstrap";

const CardContainer=({title="",children,header=true})=>{
    
    return(
        <Card border="secondary">
            {header ? <Card.Header className="text-center" as="h5">{title}</Card.Header>:<></>}
            <Card.Body>{children}</Card.Body>
        </Card>
    )
}
export default CardContainer;