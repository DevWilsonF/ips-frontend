import React from 'react'

function DataTable({ titles, data, filtering, filterData, actions = null }) {
  console.log(titles)
  const renderFilterData = () => {
    if (filterData.length == 0) {
      return
    }

    return filterData.map((obj, index) => {


      return <tr key={index}>


        {Object.values(obj).map((value, indexObj) => { return <td key={indexObj}>{Object.values(obj)[indexObj].toString()}</td> })}
        {actions !== null ? <td>{actions(Object.values(obj)[0])}</td> : ''}

      </tr>
    })

  }
  const renderData = () => {
    return data.map((obj, index) => {


      return <tr key={index}>


        {Object.values(obj).map((value, indexObj) => { return <td key={indexObj}>{Object.values(obj)[indexObj].toString()}</td> })}
        {actions !== null ? <td>{actions(Object.values(obj)[0])}</td> : ''}

      </tr>
    })

  }

  if (data.length === 0) {
    return <p>No hay informacion</p>
  }

  return (
    <div className="table-responsive"><table className='table table-stripped'>
      <thead>
        <tr>
          {titles.map((title, index) => { return <th key={index}>{title}</th> })}
          {actions !== null ? <th>Acciones</th> : ''}


        </tr>
      </thead>

      <tbody>
        {filtering ? renderFilterData() : renderData()}

      </tbody>
    </table></div>
  )
}

export default DataTable