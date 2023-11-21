import React from 'react'
import '../styles/LoginPage.css'
import { Navigate } from 'react-router-dom'
import {Card,Button,FloatingLabel,Form, Container,Row,Col} from 'react-bootstrap';


function LoginPage({isLogued}) {
  document.title = 'Prevenir IPS | Login'
  if(isLogued){
    return <Navigate to={'/dashboard/home'}/>

  }
  return (
    <Container >
      <Row className="justify-content-md-center mt-5">
        <Col sm="12" md="5">
          <Card  className="text-center" style={{boxShadow: "0 0 10px #111111"}}>
            <Card.Img variant="top" src="logoIPS.png" />
            <Card.Body>
              <>
                <FloatingLabel  controlId="floatingInput" label="Usuario" className="m-3">
                  <Form.Control type="text" placeholder="Usuario" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                  <Form.Control type="password" placeholder="Contraseña" />
                </FloatingLabel>
              </>
              <Button variant="primary">Login</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage