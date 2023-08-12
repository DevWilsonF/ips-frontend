import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path='*' element={<NotFoundPage/>} />

        </Routes>


      </Router>
      
    </>
  )
}

export default App
