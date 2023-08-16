import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import { handleLogin} from './api/AuthAPI'
import PatientsPage from './pages/dashboard/PatientsPage'

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
        <Navbar isLogued={!!user} />
        {/* <button onClick={user ? logout : login} style={{ marginTop: '70px' }}>{user ? 'Logout' : 'Login'}</button>
        <Link to={'/dashboard/home'}><button>dashboard</button></Link> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage isLogued={!!user}/>} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            

            <Route path='/dashboard/*' element={<DashboardPage />} >
              <Route path='home' />
              <Route path='patients' element={<PatientsPage/>} />
              <Route path='patient' />
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
