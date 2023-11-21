import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {HomePage, LoginPage, NotFoundPage} from "./pages"
import {PatientPage,PatientsPage, PatientInfoPage, PatientAppointmentsPage,ConsultationsPage,AppointmentsPage,ExamsPage,MedicalHistoriesPage,MedicalHistoryDisplay,EmployeesPage,EmployeeTypesPage} from "./pages/dashboard"

import DashboardPage from './pages/dashboard/DashboardPage'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import medicalHistoryDisplay from './pages/dashboard/MedicalHistoryDisplay'
import {handleAuth} from "./services/HandleAuth"

function App() {
  const isAuth= true
  return (
    <>
      
      <Router>
        
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!isAuth} />}>
            <Route path='/login' element={<LoginPage isLogued={isAuth} />} />
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>

            <Route path='/dashboard/*' element={<DashboardPage />} >
              <Route path='home' />


              <Route path='patients' element={<PatientsPage />} ></Route>
              <Route path='patients/:id/*' element={<PatientPage />} >
                <Route path='info' element={<PatientInfoPage />}></Route>
                <Route path='medical-history' element={<MedicalHistoryDisplay />}>
                </Route>
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
