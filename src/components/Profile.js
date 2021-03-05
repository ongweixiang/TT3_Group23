import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import ApiService from "../services/apiServices";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountKey: " ",
      address: " ",
      email: " ",
      firstName: " ",
      lastName: " ",
      nric: " ",
      phoneNumber: " ",
      username: " ",
    };

    ApiService.login(
      "Group23", "M4suvRLLksbz4rG"
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log("*********", response);
        this.setState({
          firstName: response.firstName,
          lastName: response.lastName,
          address: response.address,
          email: response.email,
          phoneNumber: response.phoneNumber,
        });
      });
    // ApiService.login("Group23", "M4suvRLLksbz4rG")
    //   .then((response)=> {
    //       if(response.ok){
    //         console.log(response);
    //         localStorage.setItem("login_JSON",JSON.stringify(response.json()));
    //         props.history.push("/profile");
    //         window.location.reload();
    //       }
    //     })
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="welcomemessage">
          <h1>
            Welcome {this.state.firstName} {this.state.lastName}
          </h1>
        </div>
        <div className="profile_page">
          <h2>Personal Information</h2>
          <h4>Phone Number Registered: {this.state.phoneNumber}</h4>
          <h4>Address: {this.state.address}</h4>
          <h4>Email: {this.state.email}</h4>
        </div>
      </div>
    );
  }
}
