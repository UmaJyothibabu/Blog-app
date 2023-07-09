import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const inputHandler = (e) => {
    console.log("OnChange");
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const SubmitHandler = () => {
    console.log("button clicked", inputs);
    axios
      .post("http://localhost:8000/api/signup", inputs)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Registered successfully") {
          alert(response.data.message);
          navigate("/");
        }
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Header />
      <div className="container w-50">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <h3>SignUp</h3>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="email" className="form-label">
                  Email Id
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="10"
                  className="form-control"
                  onChange={inputHandler}
                ></textarea>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="number" className="form-label">
                  Phone number
                </label>
                <input
                  id="number"
                  type="tel"
                  name="phone"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="uname" className="form-label">
                  Username
                </label>
                <input
                  id="uname"
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="pwd" className="form-label">
                  Password
                </label>
                <input
                  id="pwd"
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-danger" onClick={SubmitHandler}>
                  Register
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-ld-12">
                <a href="/">Already have an accoun? Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
