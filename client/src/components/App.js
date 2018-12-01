import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bar from "./Bar";
import NavBar from "./NavBar";
import "../../node_modules/materialize-css/dist/css/materialize.css";
import "bootstrap/dist/css/bootstrap.css";
import DrinksContainer from "./oldDrinkContainer";
import HomeContainer from "./HomeContainer";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route path="/k" component={HomeContainer} />
        <Route path="/mainpage" component={DrinksContainer} />
        <Route path="/bar" component={Bar} />
      </React.Fragment>
    </Router>
  );
};

export default App;
