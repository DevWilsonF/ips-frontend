import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {HomePage, LoginPage, NotFoundPage} from "./pages"
import {PatientPage,PatientsPage, PatientInfoPage, PatientAppointmentsPage,ConsultationsPage,AppointmentsPage,ExamsPage,MedicalHistoriesPage,MedicalHistoryDisplay,EmployeesPage,EmployeeTypesPage} from "./pages/dashboard"

import DashboardPage from './pages/dashboard/DashboardPage'
import Navbar from './components/Navbar'
import LeftNavbar from './components/dashboard/LeftNavbar'
import ProtectedRoute from './components/ProtectedRoute'
import medicalHistoryDisplay from './pages/dashboard/MedicalHistoryDisplay'
import {handleAuth} from "./services/HandleAuth"
import {refreshToken} from './api/Auth'
import {React,useState,useEffect} from 'react'
function App() {
  const [isAuth , setIsAuth]= useState(false)
  useEffect(() => {
    const authenticateUser = async () => {
      // Lógica para verificar si el usuario está autenticado
      try {
        const authenticated = await handleAuth();
        setIsAuth(authenticated);
      } catch (error) {
        throw error
      }
      
    };
    authenticateUser();
  }, []);
  return (
    <>
      <Router >
        <Navbar isLogued={isAuth}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route path='/dashboard/*' element={<DashboardPage />} >
              <Route path='patients' element={<PatientsPage />} ></Route>
              <Route path='patients/:id/*' element={<PatientPage />} >
                <Route path='info' element={<PatientInfoPage />}></Route>
                <Route path='medical-history' element={<MedicalHistoryDisplay />}></Route>
                <Route path='appointments' element={<PatientAppointmentsPage />}></Route>
              </Route>
              <Route path='appointments' element={<AppointmentsPage />} />
              <Route path='consultation/:id' element={<ConsultationsPage />} />
              <Route path='consultations' element={<ConsultationsPage />} />

              <Route path='exams' element={<ExamsPage />} />
              <Route path='exams/:id' element={<PatientPage />} />

              <Route path='medical-histories' element={<MedicalHistoriesPage />} />
              <Route path='medical-histories/:id' element={<PatientPage />} />

              <Route path='employees' element={<EmployeesPage />} />
              <Route path='employees/:id' element={<PatientPage />} />

              <Route path='employee-types' element={<EmployeeTypesPage />} />
              <Route path='profile' />
            </Route>

          </Route>

          <Route path='*' element={<NotFoundPage />} />

        </Routes>
        

      </Router>

    </>
  )
}

export default App
