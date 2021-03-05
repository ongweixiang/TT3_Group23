import React from "react";
import { Link } from "react-router-dom";

function wrongInput() {
  const loginStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <h1>Wrong username or password</h1>
      <h2>Please try again using the Login button</h2>
      <button>
        {/* <Link style={loginStyle} to="/login">
          <li>
            <h2>Login</h2>
          </li>
        </Link> */}
      </button>
    </div>
  );
}

export default wrongInput;
