import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addpost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "", img_url: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const addPost = () => {
    console.log("Add clicked");
    axios
      .post("http://localhost:8000/api/addposts", post)
      .then((response) => {
        if (response.data.message === "Posted successfully") {
          alert(response.data.message);
          navigate("/viewallposts");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                  name="title"
                  value={post.title}
                  onChange={inputHandler}
                  id=""
                  cols="30"
                  rows="2"
                  className="form-control"
                  placeholder="Post title"
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12">
                <textarea
                  name="content"
                  value={post.content}
                  onChange={inputHandler}
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
                  name="img_url"
                  value={post.img_url}
                  onChange={inputHandler}
                  id=""
                  className="form-control"
                  placeholder="Image url"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12">
                <button className="btn btn-success" onClick={addPost}>
                  {" "}
                  Add POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addpost;
