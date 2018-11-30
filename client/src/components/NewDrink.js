import React from "react";
//import DrinksContainer from "./DrinkContainer";

const NewDrink = props => {
  let formFields = {};

  return (
    <form
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
      <input
        ref={input => (formFields.title = input)}
        placeholder="Drink Name"
      />
      <input
        ref={input => (formFields.description = input)}
        placeholder="Description"
      />
      <input ref={input => (formFields.steps = input)} placeholder="Steps" />
      <input ref={input => (formFields.source = input)} placeholder="Source" />

      <input type="submit" />
    </form>
  );
};

export default NewDrink;
