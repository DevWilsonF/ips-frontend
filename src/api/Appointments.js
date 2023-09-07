import axios from 'axios';

export const getAppointments = async () => {
  try {
    const response = await axios.get(
      'http://127.0.0.1:8000/appointmentList/'
    );
    
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export const getAppointment = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/appointmentDetail/${id}`
      );
      
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  export const addAppointment = async (data) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/appointmentList/',data
      )
      
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
export const getPatientAppointments = async (id) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/appointmentList/'
      );
      let patientAppointments = []
      patientAppointments = response.filter((obj)=>obj.patientID==id)
     
      return patientAppointments;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  export const getEmployeeAppointments = async (id) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/appointmentList/'
      );
      let employeeAppointments = []
      employeeAppointments = response.filter((obj)=>obj.employeeID==id)
     
      return employeeAppointments;
    } catch (error) {
      console.error(error);
      return null;
    }
  }