import React from 'react'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <p>
        Are you a Worker<Link to="/workerlogin">Register Here</Link>
      </p>
      <p>
        Are you a Job Seeker<Link to="/seekerlogin">Register Here</Link>
      </p>
    </div>
  )
}

export default LandingPage