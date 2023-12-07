import {React,useState} from 'react'
import '../styles/LoginPage.css'
import {Card,Button,FloatingLabel,Form, Stack,Row,Col} from 'react-bootstrap';
import { handleLogin } from '../services/HandleLogin';
import {handleAuth} from "../services/HandleAuth"
import { Navigate, useNavigate } from 'react-router-dom';
function LoginPage({isAuth}) {
  document.title = 'Prevenir IPS | Login'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async() =>{
    try {
      
      await handleLogin(username,password);
      window.location.reload(true)
    } catch (error) {
      console.error("Error en el inicio de sesión:",error)
    }
  }
  if(isAuth ){
    
    return <Navigate to={"/dashboard/patients"}/>;
  }
  
  return (
    <>
      <Row className="justify-content-md-center m-5">
        <Col sm="12" md="4">
          <Card  className="text-center">
            <Card.Body className='p-3'>
                <Stack gap={2}>
                  <Card.Title>Sign In</Card.Title>
                  <FloatingLabel  controlId="floatingInput" label="Usuario" className="m-3">
                    <Form.Control  type="text" defaultValue={""} placeholder="Usuario" onChange={(e)=> setUsername(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                    <Form.Control  type="password" defaultValue={""} placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                  </FloatingLabel>
                </Stack>
                
              <Button variant="primary" onClick={login}>Login</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default LoginPage