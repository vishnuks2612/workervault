import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';

const AdminViewQueries = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/viewQueries/").then(
      (response) => {
        changeData(response.data)
      }
    )
  }

  useEffect(() => { fetchData() }, [])


  return (
    <div>

      <AdminNavbar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='row g-3'>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Queries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <td>{value.userid}</td>
                          <td>{value.description}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminViewQueries