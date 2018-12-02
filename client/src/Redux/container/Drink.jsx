import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import NewDrinkForm from "./NewDrinkForm";

class Drink extends Component {
  render() {
    return (
      <div>
        <h1>drink.js file</h1>
        <NewDrinkForm />
        {this.props.isAddDrink ? (
          <div className="AttrForm">
            <h3>Add New Drink</h3>

            <Button bsStyle="link" onClick={this.props.addDrink}>
              Cancel
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drinks: state.drinks
  };
};

export default connect(
  mapStateToProps,
  { NewDrinkForm }
)(Drink);
