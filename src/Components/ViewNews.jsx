import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ViewNews = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d"
      )
      .then((response) => {
        changeData(response.data.articles);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div
                    key={`news_${index}`}
                    className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex allign-items-stretch "
                  >
                    <div className="card text-center border shadow border-primary">
                      <h5 className="card-header">{value.title}</h5>
                      <p>{value.author}</p>
                      <div className="card-body">
                        <h5 className="card-title">{value.description}</h5>
                        <p className="card-text">{value.content}</p>
                        <img
                          src={value.urlToImage}
                          className="card-img-top"
                          alt="..."
                        ></img>
                        <Link to={value.url} className="btn btn-primary">
                          See News
                        </Link>
                      </div>
                      <div className="card-footer">
                        <p>Source: {value.source.name}</p>
                        <p className="">Published At: {value.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNews;
