import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import "bootstrap/dist/css/bootstrap.css";
import DrinkPage from "../container/DrinkPage";
import NavBar from "./NavBar";
import BarList from "./BarList";

import { Home } from "./home";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route path="/home" component={Home} />
        <Route path="/mainpage" component={DrinkPage} />
        <Route path="/barlist" component={BarList} />
      </React.Fragment>
    </Router>
  );
};

export default App;
