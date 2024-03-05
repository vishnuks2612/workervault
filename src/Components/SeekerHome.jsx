import React from 'react'
import SeekersNavbar from './SeekersNavbar'
import { Link } from "react-router-dom";

const SeekerHome = () => {
    return (

        <div>
            <SeekersNavbar />
            <div className="hero">
                <img
                    alt="homebackimg"
                    src="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vcm5pbmclMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"
                />
            </div>
            <div className="home-text">
                <h1>Find Your Needs</h1>
                <p>Select your needed worker</p>
                <li className="btn">
                    <Link className=" look-button" to="/findworker">
                        Find
                    </Link>
                </li>
            </div>

        </div>
    )
}

export default SeekerHome