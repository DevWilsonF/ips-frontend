import react,{ useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
const DisplayTable=({tableHeaders,tableContent,children})=>{
    const [data,setData]=useState([])
    const fetchData = async ()=>{
        try{
            const response = await tableContent
            setData(response)
        }catch(error){
            console.error("No  se pudo obtener los datos para la tabla",error)
        }
    }
    useEffect(() => {
        fetchData();
        },[])
    return (
        <Table responsive size="lg">
            <thead>
                <tr>
                    {Object.keys(tableHeaders).map((title ,index)=>(
                        <th key={index}>
                            {title}
                        </th>
                    ))}
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
            {data.map((element, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(tableHeaders).map((header, colIndex) => (
                    <td key={colIndex}>
                        {element[header]}
                    </td>
                    ))}
                    <td>
                        {children}
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default DisplayTable