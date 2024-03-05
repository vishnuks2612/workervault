import React from 'react'
import { Link } from "react-router-dom";

const SeekersNavbar = () => {
    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    WorkerVaulT
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/seekershome">
                                <i className="fa-solid fa-tv"></i>
                                Home
                            </Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link classNameName="nav-link">
                                {sessionStorage.getItem("name")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/seekerviewnews">
                                <i className="fa-solid fa-newspaper"></i>
                                News
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/seekerviewnearnews">
                                <i className="fa-solid fa-newspaper"></i>
                                Near Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/seekercontactus">
                                <i className="fa-solid fa-address-book"></i>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <i className="fa-solid fa-address-card"></i>
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-user"></i>
                                profile
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/findworker">
                                        <i className="fa-solid fa-rectangle-ad"></i>
                                        Find Workers
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                        Edit Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fa-solid fa-right-from-bracket"></i>
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