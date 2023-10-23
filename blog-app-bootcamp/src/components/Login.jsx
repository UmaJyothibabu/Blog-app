import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addHandler = () => {
    axios
      .post("http://localhost:8000/api/login", user)
      .then((response) => {
        if (response.data.message === "Login successfully") {
          const token = response.data.token;
          const userid = response.data.data._id;
          console.log(token);
          console.log(userid);
          sessionStorage.setItem("userToken", token);
          sessionStorage.setItem("userId", userid);
          alert(response.data.message);
          navigate("/viewallposts");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12">
            <h1 className=""> Blog App - Login </h1>

            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="" className="form-label">
                  {" "}
                  Username{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="" className="form-label">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  id=""
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-success" onClick={addHandler}>
                  {" "}
                  LOGIN{" "}
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <a href="/register"> New Users Click Here </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
