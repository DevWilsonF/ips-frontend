import React from 'react'

function Loading({loading=true,children}) {
  return (
    loading ? <div className="container-fluid d-flex justify-content-center"><p className='me-3'>Cargando</p><div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div></div> : children
  )
}

export default Loading