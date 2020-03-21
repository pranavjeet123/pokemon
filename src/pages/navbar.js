import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "./home";
import { SecondPage } from "./secondPage";
export const Navbar = () => {
  return (
    <Router>
      <div className="thNavbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second-page">Second Page</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/second-page" component={SecondPage} />
      </div>
    </Router>
  );
};
