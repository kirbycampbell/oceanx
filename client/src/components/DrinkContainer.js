import React, { Component } from "react";
import axios from "axios";
import NewDrink from "./NewDrink";

class DrinksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(title, description, steps, source) {
    axios
      .post("api/drinks", {
        drink: { title, description, steps, source }
      })
      .then(response => {
        this.setState({
          drinks: this.state.drinks.concat(response.data)
        });
      });
  }

  addNewDrink(drink) {
    this.setState({
      drinks: this.state.drinks.concat(drink)
    });
  }

  componentDidMount() {
    axios
      .get("api/drinks.json")
      .then(response => {
        //console.log(response);
        this.setState({
          drinks: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Drinks-container">
        <NewDrink handleFormSubmit={this.handleFormSubmit} />
        {this.state.drinks.map(drink => {
          return (
            <div className="single-list" key={drink.id}>
              <h4>{drink.id}</h4>
              <p>{drink.title}</p>
              <p>{drink.description}</p>
              <p>{drink.steps}</p>
              <p>{drink.source}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DrinksContainer;

// BOTH RUBY AND REACT ARE RUNNING IN THE TERMINAL CURRENTLY - API FEEDING REACT
