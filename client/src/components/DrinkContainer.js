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
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    console.log("in delete method");
    axios
      .delete("api/drinks/" + id)
      .then(response => {
        const drinks = this.state.drinks.filter(drink => drink.id !== id);
        this.setState({ drinks });
      })
      .catch(error => console.log(error));
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
      <div className="container">
        <NewDrink handleFormSubmit={this.handleFormSubmit} />
        {this.state.drinks.map(drink => {
          return (
            <div className="card" key={drink.id}>
              <h2>{drink.title}</h2>

              <div className="card-content">
                <p>Description: {drink.description}</p>
                <p>Directions: {drink.steps}</p>
                <p>
                  {" "}
                  <a href={drink.source}>Source Recipe For {drink.title}</a>
                </p>
                <button onClick={() => this.handleDelete(drink.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DrinksContainer;

// BOTH RUBY AND REACT ARE RUNNING IN THE TERMINAL CURRENTLY - API FEEDING REACT
