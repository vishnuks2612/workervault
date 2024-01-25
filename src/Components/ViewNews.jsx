import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const ViewNews = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then((response) => {
            changeData(response.data.articles);
        });
    };


    useEffect(() => { fetchData(); }, []);



    return (
        <div>

            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row g-3">
                            {data.map((value, index) => {
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex allign-items-stretch">
                                    <div class="card text-center border shadow border-primary">
                                        <h5 class="card-header">{value.title}</h5>
                                        <p>{value.author}</p>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.description}</h5>
                                            <p class="card-text">{value.content}</p>
                                            <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                            <a href={value.url} class="btn btn-primary">
                                                See News
                                            </a>
                                        </div>
                                        <div className="card-footer">
                                            <p>Source: {value.source.name}</p>
                                            <p class="">Published At: {value.publishedAt}</p>
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

export default ViewNews