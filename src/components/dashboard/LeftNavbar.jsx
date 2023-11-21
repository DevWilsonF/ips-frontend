import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { BsHouseFill, BsPersonRolodex, BsPersonCircle, BsSpeedometer, BsGearFill, BsHospitalFill } from "react-icons/bs";
import { FaWheelchair, FaUserMd, FaFileMedicalAlt, FaFolderOpen, FaFileMedical, FaNotesMedical, FaPaperclip } from "react-icons/fa";
import '../../styles/LeftNavbar.css'


function LeftNavbar() {
    const [username, setUsername] = useState('Unknown') 
    return (
        <div className="d-flex flex-column bg-dark text-white p-3 dashboard">

            <NavLink to={'home'} className="text-decoration-none text-center"><h3 className="d-none d-sm-inline text-white ">Prevenir Dashboard </h3><BsSpeedometer className='text-white d-sm-none d-inline'/>  </NavLink>
            <hr className="" />
            <ul className="nav nav-pills d-flex flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to={'patients'} className="nav-link text-white dashboard-link"><FaWheelchair/> <span className="d-none d-sm-inline">Pacientes</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'appointments'} className="nav-link text-white dashboard-link"><FaPaperclip/> <span className="d-none d-sm-inline">Citas</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'exams'} className="nav-link text-white dashboard-link"><FaFileMedicalAlt/> <span className="d-none d-sm-inline">Examenes</span></NavLink>
                </li>

                <hr />
                <li className="nav-item">
                    <NavLink to={'updates'} className="nav-link text-white dashboard-link"><BsGearFill/> <span className="d-none d-sm-inline">Actualizaciones</span></NavLink>
                </li>
                <li className="nav-item">
                </li>


            </ul>
            <hr />
            



        </div>
    )
}

export default LeftNavbar