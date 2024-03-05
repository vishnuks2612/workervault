import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">WorkerVaulT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/adminhome">
                                <i className="fa-solid fa-tv"></i>
                                Home
                            </a>
                        </li>
                        
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/adminviewusers">
                                <i className="fa-solid fa-address-book"></i>
                                View Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adminviewservices">
                                <i className="fa-solid fa-address-book"></i>
                                View Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adminviewqueries">
                                <i className="fa-solid fa-address-card"></i>
                                View Queries
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                                Setting
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/adminaddservices">
                                        <i className="fa-solid fa-rectangle-ad"></i>
                                        Add Various Services
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/addnews">
                                        <i className="fa-solid fa-rectangle-ad"></i>
                                        Add News
                                    </a>
                                </li>
                                
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    
    </div>
  )
}

export default AdminNavbar