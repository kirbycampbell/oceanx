import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrinks, deleteDrink } from "./../actions/drinkActions";
import NewDrinkForm from "./NewDrinkForm";

class DrinkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
    this.props.getDrinks();
  }

  render() {
    return (
      <div className="bodyContainer">
        <NewDrinkForm />

        {this.props.drinks.map(drink => {
          return (
            <div className="card" key={drink.id}>
              <h2>{drink.title}</h2>

              <div className="card-content">
                <p>
                  <strong>Description:</strong> {drink.description}
                </p>
                <p>
                  <strong>Ingredients: </strong>

                  {drink.ingredients.map(i => {
                    return <span key={i.id}> {i.description} </span>;
                  })}
                </p>
                <p>
                  <strong>Directions:</strong> {drink.steps}
                </p>
                <p>
                  {" "}
                  <a href={drink.source}>Source Recipe For {drink.title}</a>
                </p>
                <button onClick={() => this.props.deleteDrink(drink.id)}>
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

const mapStatesToProps = state => {
  return {
    drinks: state.drinks
  };
};

export default connect(
  mapStatesToProps,
  { getDrinks, deleteDrink }
)(DrinkPage);
