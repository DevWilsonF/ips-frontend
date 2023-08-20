import React from 'react'

function FilterData({children}) {
  return (
    <form action="" className='mb-5'>
        <div className="container-fluid row">
          <input className='col form-control me-3' type="text" name="search" id="search" placeholder='Ingrese datos...'/>
          <button className='col-2 btn btn-primary me-3'>Filtrar</button>
          {children}
        </div>

      </form>
  )
}

export default FilterData