import React from "react";
import Header from "./Header";

const Addpost = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6">
            <br />
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  className="form-control"
                  placeholder="Post title"
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Type a post"
                ></textarea>
              </div>

              <div className="col col-12 col-sm-12 col-md-12">
                <input
                  type="url"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Image url"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12">
                <button className="btn btn-success"> Add POST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addpost;
