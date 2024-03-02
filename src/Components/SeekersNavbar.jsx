import React from 'react'
import { Link } from "react-router-dom";

const SeekersNavbar = () => {
    return (

        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">
                    WorkerVaulT
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/seekershome">
                                <i class="fa-solid fa-tv"></i>
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/seekerviewnews">
                                <i class="fa-solid fa-newspaper"></i>
                                News
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/seekerviewnearnews">
                                <i class="fa-solid fa-newspaper"></i>
                                Near Me
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/seekercontactus">
                                <i class="fa-solid fa-address-book"></i>
                                Contact Us
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">
                                <i class="fa-solid fa-address-card"></i>
                                About
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link
                                class="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i class="fa-solid fa-user"></i>
                                profile
                            </Link>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="dropdown-item" to="/findworker">
                                        <i class="fa-solid fa-rectangle-ad"></i>
                                        Find Workers
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to="#">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        Edit Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="#">
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default SeekersNavbar