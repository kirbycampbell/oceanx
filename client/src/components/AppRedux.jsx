import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import "../../node_modules/materialize-css/dist/css/materialize.css";
import "bootstrap/dist/css/bootstrap.css";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={NavBar} />
      </React.Fragment>
    </Router>
  );
};

export default App;
