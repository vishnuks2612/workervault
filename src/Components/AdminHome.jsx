import React from 'react'
import AdminNavbar from './AdminNavbar'

const AdminHome = () => {
  return (
    <div>

      <AdminNavbar />
      <div className="hero">
        <img
          alt="homebackimg"
          src="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vcm5pbmclMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"
        />
      </div>

      <div className="home-text">
        <h1>Admin</h1>
        <p>Admin Dashboard</p>

      </div>
    </div>
  )
}

export default AdminHome