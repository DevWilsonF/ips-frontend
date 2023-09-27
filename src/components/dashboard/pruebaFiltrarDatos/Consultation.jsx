import react ,{useState,useEffect} from "react";
import DisplayTable from "./Table"
import { useParams } from 'react-router-dom'
import {getConsultations} from "../../../api/Consultations"
const ConsultationDisplay =()=>{
    let { id } = useParams()
    const [data, setData] = useState([])
    const dictionary = {"Diagnostico":"diagnosis",
                    "Fecha Consulta":"consultationDate"};
    const fetchData = async () => {
        let data = await getConsultations(id)
        setData(data)
      }
      useEffect(() => {
        fetchData()
      }, [])

    return(
        <DisplayTable tableHeaders={dictionary} tableContent={data}></DisplayTable>
    )
}
export default ConsultationDisplay