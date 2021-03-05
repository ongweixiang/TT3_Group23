import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import wrongInput from "./components/wrongInput";
import Profile from "./components/Profile";
import ItemDetail from "./components/itemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/login" component={Login} />
          <Route path="/wrong" component={wrongInput} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
