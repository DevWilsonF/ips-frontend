import axios from "axios";
const arrayPatient = {
  firstName: "Daniela",
  lastName: "Andrade Cardenas",
  phone: "3214236185",
  gender: "F",
  maritalStatus: "Soltera",
  nationality: "Colombia",
  documentType: "10032562117",
  documentNumber: "10032562117",
  birthDate: "2002-02-18",
  email: "dniela@gmail.com",
  insuranceType: "no se",
  occupation: "Estudiante",
};
export const addPatient = async (data) => {
  try {
    const response = await axios.post(
      "https://prevenirbackend.up.railway.app/patients/",
      data
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error al agregar paciente:", error);
    return null;
  }

  
};

export const getPatients = async () => {
  try {
    const response = await axios.get(
      "https://prevenirbackend.up.railway.app/patients/"
    );

    return response.data;
  } catch (error) {console.error("Error al obtener pacientes:", error);
  return null;}
};
export const getPatient = async (id) => {
    try {
      const response = await axios.get(
        `https://prevenirbackend.up.railway.app/patientsDetail/${id}`
      );
  
      return response.data;
    } catch (error) {console.error("Error al obtener pacientes:", error);
    return null;}
  };
  