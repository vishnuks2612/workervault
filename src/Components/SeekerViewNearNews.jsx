import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SeekersNavbar from './SeekersNavbar'

const SeekerViewNearNews = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/viewnearnews/").then((response) => {
      changeData(response.data)
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <SeekersNavbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='row g-3'>

              {data.map((value, index) => {
                return <div
                  className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex allign-items-stretch "
                >
                  <div className="card text-center border shadow border-primary">
                    <h5 className="card-header">{value.title}</h5>
                    <div className="card-body">
                      <h5 className="card-title">{value.description}</h5>
                      <p className="card-text">{value.content}</p>
                      <img
                        src={value.image}
                        className="card-img-top"
                        alt="..."
                      ></img>

                    </div>
                    <div className="card-footer">
                      <p>{value.location}</p>
                    </div>
                  </div>
                </div>
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeekerViewNearNews