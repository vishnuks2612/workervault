import React from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddServices = () => {
  return (
    <div>
      <AdminNavbar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className="add-service-image">
        <div className="wrapper">
          <br></br>
          <h1>Add Services</h1>
          <form action="" className='needs-validation' noValidate >
            <div className="input-box was-validated">
              <input className='form-control' type="text" placeholder="Add Service" name='servicename'  required />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminAddServices