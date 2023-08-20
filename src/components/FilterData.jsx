import React from 'react'

function FilterData() {
  return (
    <form className='mb-5 ' action="">
        <div className="container-fluid row">
          <input className='col form-control me-3' type="text" name="search" id="search" placeholder='Ingrese datos...'/>
          <button className='col-2 btn btn-primary me-3'>Filtrar</button>
          <button className='col-2 btn btn-success'>Agregar Paciente</button>
        </div>

      </form>
  )
}

export default FilterData