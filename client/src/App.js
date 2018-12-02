import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bar from "./components/Bar";
import NavBar from "./components/NavBar";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "bootstrap/dist/css/bootstrap.css";
import DrinksContainer from "./components/DrinkContainer";
import HomeContainer from "./components/HomeContainer";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route path="/k" component={HomeContainer} />
        <Route path="/mainpage" component={DrinksContainer} />
        <Route path="/bar" component={Bar} />
      </React.Fragment>
    </Router>
  );
};

export default App;
