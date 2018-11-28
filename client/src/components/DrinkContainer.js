import React, { Component } from "react";
import axios from "axios";

class DrinksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
    axios
      .get("api/drinks.json")
      .then(response => {
        console.log(response);
        this.setState({
          drinks: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Drinks-container">
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
