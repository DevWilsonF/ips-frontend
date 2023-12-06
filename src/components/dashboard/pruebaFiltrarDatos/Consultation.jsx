import react ,{useState,useEffect} from "react";
import DisplayTable from "./Table"
import { Link, useParams } from 'react-router-dom'
import {getConsultations} from "../../../api/Consultations"
import { consultationsTranslate } from "../../../utils/consultationDictionary";
const ConsultationDisplay =()=>{
    let { id } = useParams()
    return(
        <DisplayTable tableHeaders={consultationsTranslate()} tableContent={getConsultations(id)}><Link className='btn btn-primary' to={`/dashboard/consultation/${id}`}>Ver</Link></DisplayTable>
    )
}
export default ConsultationDisplay