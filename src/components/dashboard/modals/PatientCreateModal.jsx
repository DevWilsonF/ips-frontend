import React, { useState } from 'react'
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import {Accordion} from 'react-bootstrap/'
function PatientCreateModal({ modal, toggle, onClick }) {

  const nationalities = [
    "Colombiano/a",
    "Estadounidense",
    "Canadiense",
    "Mexicano/a",
    "Argentino/a",
    "Chileno/a",
    "Español/a",
    "Brasileño/a",
    "Francés/a",
    "Alemán/a",
    "Italiano/a",
    "Chino/a",
    "Japonés/a",
    "Ruso/a",
    "Indio/a",
    "Australiano/a",
    "Sudafricano/a",
    "No especificado"
  ];
  const documentTypes = [
    "Cédula de Ciudadanía",
    "DNI",
    "Pasaporte",
    "Cédula de Identidad",
    "Licencia de Conducir",
    "Carné de Extranjería",
    "Tarjeta de Residencia",
    "Documento de Identificación Fiscal",
    "Registro Nacional de Identificación y Estado Civil (RENIEC)",
    "Registro Federal de Contribuyentes (RFC)",
    "Número de Seguridad Social",
    "Otros"
  ];
  
  const maritalStatusTypes = ["Soltero/a",
    "Casado/a",
    "Divorciado/a",
    "Viudo/a",
    "Separado/a",
    "Conviviente",
    "Comprometido/a",
    "En una relación",
    "Pareja de hecho",
    "No especificado"]
  const genderTypes = ['Masculino','Femenino','Otro']

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState(genderTypes[0])
  const [maritalStatus, setMaritalStatus] = useState(maritalStatusTypes[0])
  const [nationality, setNationality] = useState(nationalities[0])
  const [documentType, setDocumentType] = useState(documentTypes[0])
  const [documentNumber, setDocumentNumber] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [insuranceType, setInsuranceType] = useState('')
  const [occupation, setOccupation] = useState('')

  const handleSubmit = () => {
    if (firstName === '' || lastName === '' || phone === '' || gender === '' || maritalStatus === '' || nationality === '' || documentType === ''|| documentNumber === '' || birthDate === '' || email === '' || insuranceType === '' || occupation === '') {
      alert('incompleto'+firstName+lastName+phone+gender+maritalStatus+nationality+documentType+birthDate+email+insuranceType+occupation)
      return
    }
    onClick({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender,
      maritalStatus: maritalStatus,
      nationality: nationality,
      documentType: documentType,
      documentNumber: documentNumber,
      birthDate: birthDate,
      email: email,
      insuranceType: insuranceType,
      occupation: occupation
    })

  }
  


  return (

    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle}>Agregar Paciente</ModalHeader>
      <ModalBody>
        
        <Label>Nombre</Label>
        <Input value={firstName} type='text' onChange={(e) => { setFirstName(e.target.value) }} />
        <Label>Apellido</Label>
        <Input value={lastName} type='text' onChange={(e) => { setLastName(e.target.value) }} />
        <Label>Celular</Label>
        <Input value={phone} type='number' onChange={(e) => { setPhone(e.target.value) }} />
        <Label>Genero</Label>
        <Input value={gender} type='select' onChange={(e) => { setGender(e.target.value) }} >{genderTypes.map((data,index)=><option key={index}>{data}</option>)}</Input>
        <Label>Estado Civil</Label>
        <Input value={maritalStatus} type='select' onChange={(e) => { setMaritalStatus(e.target.value) }} >{maritalStatusTypes.map((data, index) => <option key={index}>{data}</option>)}</Input>
        <Label>Nacionalidad</Label>
        <Input value={nationality} type='select' onChange={(e) => { setNationality(e.target.value) }} >{nationalities.map((data, index) => <option key={index}>{data}</option>)}</Input>
        <Label>Tipo de documento</Label>
        <Input value={documentType} type='select' onChange={(e) => { setDocumentType(e.target.value) }} >{documentTypes.map((data,index)=><option key={index}>{data}</option>)}</Input>
        <Label>Numero de documento</Label>
        <Input value={documentNumber} onChange={(e) => { setDocumentNumber(e.target.value) }} />
        <Label>Fecha de nacimiento</Label>
        <Input value={birthDate} type='date' onChange={(e) => { setBirthDate(e.target.value) }} />
        <Label>Email</Label>
        <Input value={email} type='email' onChange={(e) => { setEmail(e.target.value) }} />
        <Label>Tipo de seguro</Label>
        <Input value={insuranceType} onChange={(e) => { setInsuranceType(e.target.value) }} />
        <Label>Ocupacion</Label>
        <Input value={occupation} onChange={(e) => { setOccupation(e.target.value) }} />

      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit} color="primary" >
          Agregar
        </Button>
        <Button onClick={toggle} color="secondary">
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>

  )
}

export default PatientCreateModal