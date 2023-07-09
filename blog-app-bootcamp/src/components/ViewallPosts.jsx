import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewallPosts = () => {
  const [data, setData] = useState([]);
  const [deletion, setDeletion] = useState(false);

  const fetchDataFromApi = () => {
    axios.get("http://localhost:8000/api/viewall").then((response) => {
      console.log(response.data);

      setData(response.data);
    });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [deletion]);

  const deleteHandler = (id) => {
    setDeletion(false);
    axios.delete(`http://localhost:8000/api/posts/${id}`).then((response) => {
      if (response.data.message === "Post deleted successfully") {
        alert(response.data.message);
        setDeletion(true);
      } else {
        alert(response.data.message);
      }
    });
  };
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
                            src={value.img_url}
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
                                Last updated : {value.createdAt}
                              </small>
                            </p>
                            <button className="btn btn-success">Update</button>
                            &nbsp;
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteHandler(value._id);
                              }}
                            >
                              Delete
                            </button>
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
