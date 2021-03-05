import React from "react";
import { Link } from "react-router-dom";

import DBS from "./DBS1.png";

function Nav() {
  const navstyle = {
    color: "black",
    textDecoration: "none",
  };

  const loginStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav>
        {<img src={DBS} alt="" width="142" height="50" />}
        <h3> Welcome to DBS </h3>
        <ul className="nav-links">
          <Link style={navstyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navstyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navstyle} to="/transactions">
            <li>Transactions</li>
          </Link>
          <Link style={navstyle} to="/buySell">
            <li>Buy/Sell</li>
          </Link>
          {/* <Link style={navstyle} to="/shop">
            <li>Shop</li>
          </Link> */}

          <button className="loginBackground">
            <Link style={loginStyle} to="/login">
              <li>
                <h2>Login</h2>
              </li>
            </Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
