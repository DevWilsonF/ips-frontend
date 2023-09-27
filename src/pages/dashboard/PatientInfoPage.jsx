import React ,{useState}from 'react'
import { Route, useOutlet, useOutletContext } from 'react-router-dom'
import { Input, Label ,Button} from 'reactstrap'


function PatientInfoPage() {
    const [data] = useOutletContext()
    const [edit, setEdit] = useState(false)
    return (
        <>

            <div className="row">
                <div className="col">

                    <Label >Nombre</Label>
                    <Input value={data.firstName} disabled></Input>

                    <Label >Apellido</Label>
                    <Input value={data.lastName} disabled></Input>
                    <Label >Genero</Label>
                    <Input value={data.gender} disabled></Input>

                    <Label >Fecha de nacimiento</Label>
                    <Input type='date' value={data.birthDate} disabled></Input>

                    <Label >Tipo de documento</Label>
                    <Input value={data.documentType} disabled></Input>

                    <Label >Documento</Label>
                    <Input value={data.documentNumber} disabled></Input>



                </div>


                <div className="col">

                    <Label >Nacionalidad</Label>
                    <Input value={data.nationality} disabled></Input>

                    <Label >Estado Civil</Label>
                    <Input value={data.firstName} disabled></Input>

                    <Label >Fecha registrado</Label>
                    <Input type='date' value={data.registrationDate} disabled></Input>

                    <Label >Teléfono</Label>
                    <Input value={data.phone} disabled></Input>
                    <Label >Email</Label>
                    <Input value={data.email} disabled></Input>

                    <Label >Ocupacion</Label>
                    <Input value={data.occupation} disabled></Input>


                    <Label >Tipo de seguro</Label>
                    <Input value={data.insuranceType} disabled></Input>

                </div>
                <Button onClick={() => setEdit(!edit)} color={edit ? 'warning' : 'primary'} className='ms-auto'>{edit ? 'Guardar' : 'Editar'}</Button>

            </div >


        </>
    )
}

export default PatientInfoPage