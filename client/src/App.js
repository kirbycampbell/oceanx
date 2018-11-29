import React, { Component } from "react";
import "./App.css";
import DrinksContainer from "./components/DrinkContainer";
import NewDrink from "./components/NewDrink";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewDrink />
        <DrinksContainer />
      </div>
    );
  }
}

export default App;
