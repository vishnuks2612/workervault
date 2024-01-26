import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">WorkerVaulT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/adminhome">
                                <i class="fa-solid fa-tv"></i>
                                Home
                            </a>
                        </li>
                        
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/adminviewusers">
                                <i class="fa-solid fa-address-book"></i>
                                View Users
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/adminviewqueries">
                                <i class="fa-solid fa-address-card"></i>
                                View Queries
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                                Setting
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa-solid fa-rectangle-ad"></i>
                                        Add Various Services
                                    </a>
                                </li>
                                
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa-solid fa-right-from-bracket"></i>
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