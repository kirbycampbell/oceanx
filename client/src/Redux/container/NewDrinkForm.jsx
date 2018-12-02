import { createDrink } from "../actions/drinkActions";
import React, { Component } from "react";
import { connect } from "react-redux";

class NewDrinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }
  render() {
    let formFields = {};

    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={e => {
            e.preventDefault();
            let drink = {
              title: formFields.title.value,
              description: formFields.description.value,
              steps: formFields.steps.value,
              sources: formFields.source.value
              //ingredients: formFields.ingredients.value
            };
            this.props.createDrink(drink);
          }}
        >
          {" "}
          <div className="input-field col s6">
            <input
              ref={input => (formFields.title = input)}
              placeholder="Drink Name"
            />
          </div>
          <div className="input-field col s6">
            <input
              ref={input => (formFields.description = input)}
              placeholder="Description"
            />
          </div>
          <div className="input-field col s6">
            <input
              ref={input => (formFields.steps = input)}
              placeholder="Steps"
            />
          </div>
          <div className="input-field col s6">
            <input
              ref={input => (formFields.source = input)}
              placeholder="Source"
            />
          </div>
          <div className="input-field col s6">
            <input
              ref={input => (formFields.ingredients = input)}
              placeholder="Source"
            />
          </div>
          <input className="btn waves-effect waves-light" type="submit" />
        </form>
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
  { createDrink }
)(NewDrinkForm);
