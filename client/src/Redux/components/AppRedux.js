import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import "bootstrap/dist/css/bootstrap.css";
import DrinkPage from "../container/DrinkPage";
import NavBar from "./NavBar";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route path="/mainpage" component={DrinkPage} />
      </React.Fragment>
    </Router>
  );
};

export default App;
