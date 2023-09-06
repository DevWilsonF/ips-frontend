export const addEmployee = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/patients/",
        data
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error("Error al agregar empleado:", error)
      return null
    }
  
    
  }
  export const getEmployees = async () => {
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