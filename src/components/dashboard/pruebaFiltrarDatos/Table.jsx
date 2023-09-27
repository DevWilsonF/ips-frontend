import react,{ useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
const DisplayTable=({tableHeaders,tableContent})=>{

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
            {tableContent.map((element, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(tableHeaders).map((header, colIndex) => (
                    <td key={colIndex}>
                        {element[header]}
                    </td>
                    ))}
                    <td>
                        <Button>Ver mas</Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default DisplayTable