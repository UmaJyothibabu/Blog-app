import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewallPosts = () => {
  const [data, setData] = useState([]);

  const fetchDataFromApi = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d"
      )
      .then((response) => {
        console.log(response.data.articles);

        setData(response.data.articles);
      });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-stretch">
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={value.urlToImage}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title"> {value.title} </h5>
                            <p class="card-text"> {value.content} </p>
                            <p class="card-text">
                              <small class="text-body-secondary">
                                Last updated : {value.publishedAt}{" "}
                              </small>
                            </p>
                          </div>
                        </div>
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

export default ViewallPosts;
