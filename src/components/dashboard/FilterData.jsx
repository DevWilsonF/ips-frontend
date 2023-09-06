import React, { useEffect, useState } from 'react'

function FilterData({ filterParameters, onFilter }) {
  const [filterInput, setFilterInput] = useState('')
  const [filterValue, setFilterValue] = useState(filterParameters[0].value)
  const [filterText, setFilterText] = useState('Filtrar')
  const [filterType, setFilterType] = useState('text')

  useEffect(() => {
    onFilter({ text: filterInput, filterValue: filterValue })
  }, [filterInput]);

  const handleFilter = (e) => {
    filterText === 'Filtrar' ? setFilterProps(filterParameters[0].text,filterParameters[0].type, filterParameters[0].value) : ''
    setFilterInput(e.target.value)
    

  }
  const setFilterProps = (text, type,value) => {
    setFilterText(text)
    setFilterValue(value)
    setFilterType(type)
  }
  const handleFilterValue = ({ text, type, value }) => {
    setFilterProps(text, type,value)
    setFilterInput('')
    

  }

  return (

    <div className="container-fluid mb-5">
      <div className="row">
        <input onChange={handleFilter} className='col form-control' type={filterType} name="search" id="search" placeholder='Ingrese datos...' value={filterInput} />
        <div className="dropdown pe-0 col-2">
          <button className='btn w-100 btn-primary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">{filterText}</button>
          <ul className="dropdown-menu">
            {filterParameters.map((value, index) => {
              return <li key={index}><a onClick={() => handleFilterValue(value)} className="dropdown-item" href="#">{value.text}</a></li>
            })}

          </ul></div></div>



    </div>


  )
}

export default FilterData