import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import { handleLogin } from './api/Auth'
import PatientsPage from './pages/dashboard/PatientsPage'
import AppointmentsPage from './pages/dashboard/AppointmentsPage'
import ConsultationsPage from './pages/dashboard/ConsultationsPage'
import ExamsPage from './pages/dashboard/ExamsPage'
import MedicalHistoriesPage from './pages/dashboard/MedicalHistoriesPage'
import EmployeesPage from './pages/dashboard/EmployeesPage'
import EmployeeTypesPage from './pages/dashboard/EmployeeTypesPage'
import PatientPage from './pages/dashboard/PatientPage'

function App() {
  const [user, setUser] = useState(null)
  const login = () => {
    setUser({ id: 1, name: 'test' })

  }
  const logout = () => {
    setUser(null)
  }
  return (
    <>


      <Router>
        <Navbar isLogued={true} />
        {/* <button onClick={user ? logout : login} style={{ marginTop: '70px' }}>{user ? 'Logout' : 'Login'}</button>
        <Link to={'/dashboard/home'}><button>dashboard</button></Link> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage isLogued={false} />} />
          <Route element={<ProtectedRoute isAllowed={true} />}>


            <Route path='/dashboard/*' element={<DashboardPage />} >
              <Route path='home' />

              <Route path='patients' element={<PatientsPage />} />
              <Route path='patients/:id' element={<PatientPage/>} />

              <Route path='appointments' element={<AppointmentsPage />} />

              <Route path='consultations' element={<ConsultationsPage />} />
              <Route path='consultations/:id' element={<PatientPage/>} />

              <Route path='exams' element={<ExamsPage />} />
              <Route path='exams/:id' element={<PatientPage/>} />

              <Route path='medical-histories' element={<MedicalHistoriesPage/> } />
              <Route path='medical-histories/:id' element={<PatientPage/>} />

              <Route path='employees' element={<EmployeesPage/>}/>
              <Route path='employees/:id' element={<PatientPage/>} />

              <Route path='employee-types' element={<EmployeeTypesPage/>}/>
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
