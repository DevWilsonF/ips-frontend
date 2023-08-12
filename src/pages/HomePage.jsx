import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
function HomePage() {
  return (
    <div className="homepage">
      <div className="container" >
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h1>IPS Prevenir</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste commodi
              perspiciatis odit aut enim possimus maxime ullam, libero ut consectetur
              qui repellat obcaecati quod voluptas quibusdam laudantium, quisquam
              delectus ipsum.
            </p>
            <Link to={'/login'} className="btn btn-outline-primary" >Login</Link>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" draggable={false} src="/public/ips_logo.ico" alt="ips-logo" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage