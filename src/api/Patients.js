import axios from "axios"

export const addPatient = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/patients/",
      data
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error al agregar paciente:", error)
    return null
  }

  
}

export const getPatients = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/patients/"
    )

    return response.data
  } catch (error) {console.error("Error al obtener pacientes:", error)
  return null}
}
export const getPatient = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/patientsDetail/${id}`
      )
  
      return response.data
    } catch (error) {console.error("Error al obtener pacientes:", error)
    return null}
  }
  