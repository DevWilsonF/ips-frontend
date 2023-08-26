import React, { useState } from 'react'

function FilterData({ filters, onFilter }) {
  const [filterText, setFilterText] = useState('')
  const [filterValue, setFilterValue] = useState('Filtrar')
  const [filterType, setFilterType] = useState('text')
  const handleFilter = (e) => {
    filterValue === 'Filtrar' ? setFilterProps('ID', 'number') : ''
    setFilterText(e.target.value)
    onFilter({ text: filterText, filterValue: filterValue })

  }
  const setFilterProps = (text, type) => {
    setFilterValue(text)
    setFilterType(type)
  }
  const handleFilterValue = ({ text, type }) => {
    setFilterProps(text, type)
    setFilterText('')

  }

  return (

    <div className="container-fluid mb-5">
      <div className="row">
        <input onChange={handleFilter} className='col form-control' type={filterType} name="search" id="search" placeholder='Ingrese datos...' value={filterText} />
        <div className="dropdown pe-0 col-2">
          <button className='btn w-100 btn-primary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">{filterValue}</button>
          <ul className="dropdown-menu">
            {filters.map((value, index) => {
              return <li key={index}><a onClick={() => handleFilterValue(value)} className="dropdown-item" href="#">{value.text}</a></li>
            })}

          </ul></div></div>



    </div>


  )
}

export default FilterData