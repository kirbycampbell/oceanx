import React from "react";

const DrinkList = props => {
  function listDrinks() {
    return props.drinks.map(drink => {
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
            <button onClick={() => this.handleDelete(drink.id)}>Delete</button>
          </div>
        </div>
      );
    });
  }
  return <div>{listDrinks()}</div>;
};
