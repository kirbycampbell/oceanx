import React, { Component } from "react";
import axios from "axios";

class NewDrink extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    drink: []
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.drink);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Drink Name"
          value={this.state.drink.title}
        />
        <input
          type="text"
          placeholder="Description"
          value={this.state.drink.description}
        />
        <input type="text" placeholder="Steps" value={this.state.drink.steps} />
        <input
          type="text"
          placeholder="Source"
          value={this.state.drink.source}
        />

        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default NewDrink;
