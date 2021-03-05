import React, { useState, useRef, useEffect, Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, Router } from "react-router-dom";
import DBSLogo from "./Logo_Only.png";
import { isEmail } from "validator";
import ApiService from "../services/apiServices";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        <span class="label">This field is required!</span>
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setMessage("");
  //   setLoading(true);
  //   form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     ApiService.login(username, password)
  //     .then((response)=> {
  //         if(response.ok){
  //           console.log(response);
  //           localStorage.setItem("login_JSON",JSON.stringify(response.json()));
  //           props.history.push("/profile");
  //           window.location.reload();
  //         }
  //         else{
  //           const resMessage= response.json().body
  //           setLoading(false)
  //           setMessage(resMessage)
  //         }
  //       }
  //     ) 
  //   } else {
  //     setLoading(false);
  //   }
  // };
  const handleLogin = (e) => {
    const data = {
      username: "Group23",
      password: "M4suvRLLksbz4rG",
    };
    e.preventDefault();
    if (username === data.username && password === data.password) {
      props.history.push({
        pathname: "/profile",
        state: { username, password },
      });
      window.location.reload();
    } else {
      props.history.push("/wrong");
      window.location.reload();
      return;
    }
    // console.log(username);
    // console.log(password);
    // console.log(data.username);
    // console.log(data.password);
  };
  

  return (
    <div className="col-md-12">
      <div className="card-card-container">
        <img
          src={DBSLogo}
          width="100"
          height="100"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">
              <span class="label"> Username </span>
            </label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span class="label">Password</span>
            </label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
