import { useForm } from 'react-hook-form';
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { documentTypes,genderTypes,maritalStatusTypes,nationalities,occupations } from "../../../utils/DataTypes";

function PatientCreateModal({ modal, toggle, onClick }) {

  const { register, reset, handleSubmit, formState: { errors } } = useForm()

  const saveSubmit = (data) => {
    onClick(data)

  }
  const handleToggle = () => {
    reset()
    toggle()


  }

  return (

    <Modal isOpen={modal} toggle={handleToggle} >
      <ModalHeader toggle={handleToggle}>Agregar Paciente</ModalHeader>
      <form onSubmit={handleSubmit(saveSubmit)}>

        <ModalBody>
        
          <Label>Nombre</Label>
          <input {...register('firstName', { required:true , minLength: { value: 3, message: 'El nombre debe tener minimo 3 letras' } })} type="text" className={`form-control ${errors.firstName && 'is-invalid'}`} />
          {errors.firstName && <span className='invalid-feedback'>{errors.firstName.message}</span>}

          <Label>Apellido</Label>
          <input {...register('lastName', { required: true, minLength: { value: 3, message: 'El apellido debe tener minimo 3 letras' } })} type="text" className={`form-control ${errors.lastName && 'is-invalid'}`} />
          {errors.lastName && <span className='invalid-feedback'>{errors.lastName.message}</span>}

          <Label>Telefono</Label>
          <input {...register('phone', { required: true, minLength: { value: 7, message: 'El Telefono debe tener minimo 7 digitos' } })} type="number" className={`form-control ${errors.phone && 'is-invalid'}`} />
          {errors.phone && <span className='invalid-feedback'>{errors.phone.message}</span>}

          <Label>Genero</Label>
          <select {...register('gender', { required: true })} className={`form-control ${errors.gender && 'is-invalid'}`} >{genderTypes.map((value, index) => <option key={index}>{value}</option>)}</select>

          <Label>Estado Civil</Label>
          <select {...register('maritalStatus', { required: true })} className={`form-control ${errors.maritalStatus && 'is-invalid'}`} >{maritalStatusTypes.map((value, index) => <option key={index}>{value}</option>)}</select>

          <Label>Nacionalidad</Label>
          <select {...register('nationality', { required: true })} className={`form-control ${errors.nationality && 'is-invalid'}`} >{nationalities.map((value, index) => <option key={index}>{value}</option>)}</select>

          <Label>Tipo de documento</Label>
          <select {...register('documentType', { required: true })} className={`form-control ${errors.documentType && 'is-invalid'}`} >{documentTypes.map((value, index) => <option key={index}>{value}</option>)}</select>

          <Label>Numero de documento</Label>
          <input {...register('documentNumber', { required: true, minLength: { value: 8, message: 'El DNI debe tener minimo 8 digitos' } })} type="number" className={`form-control ${errors.documentNumber && 'is-invalid'}`} />
          {errors.documentNumber && <span className='invalid-feedback'>{errors.documentNumber.message}</span>}

          <Label>Fecha de nacimiento</Label>
          <input {...register('birthDate', { required: true })} type="date" className={`form-control ${errors.birthDate && 'is-invalid'}`} />

          <Label>Email</Label>
          <input {...register('email', { required: true, pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Email no valido' } })} type="email" className={`form-control ${errors.email && 'is-invalid'}`} />
          {errors.email && <span className='invalid-feedback'>{errors.email.message}</span>}
          
          <Label>Tipo de seguro</Label>
          <input {...register('insuranceType', { required: true, minLength: { value: 3, message: 'El tipo de seguro debe tener minimo 3 letras' } })} type="text" className={`form-control ${errors.insuranceType && 'is-invalid'}`} />
          {errors.insuranceType && <span className='invalid-feedback'>{errors.insuranceType.message}</span>}

          <Label>Ocupacion</Label>
          <select {...register('occupation', { required: true })} className={`form-control ${errors.occupation && 'is-invalid'}`} >{occupations.map((value,index) => <option key={index}>{value}</option>)}</select>

        </ModalBody>
        <ModalFooter>
          <Button type='submit' color="primary" >
            Agregar
          </Button>
          <Button onClick={handleToggle} color="secondary">
            Cancelar
          </Button>
        </ModalFooter>
      </form>
    </Modal>

  )
}

export default PatientCreateModal