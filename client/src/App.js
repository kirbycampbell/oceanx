import React, { Component } from "react";
import "./App.css";
import DrinksContainer from "./components/DrinkContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrinksContainer />
      </div>
    );
  }
}

export default App;
