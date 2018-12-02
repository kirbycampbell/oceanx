import React from "react";
//import DrinksContainer from "./DrinkContainer";
import "../../node_modules/materialize-css/dist/css/materialize.css";

const NewDrink = props => {
  let formFields = {};

  return (
    <div className="row">
      <form
        className="col s12"
        onSubmit={e => {
          props.handleFormSubmit(
            formFields.title.value,
            formFields.description.value,
            formFields.steps.value,
            formFields.source.value
          );

          e.preventDefault();
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
        <input
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        />
      </form>
    </div>
  );
};

export default NewDrink;
