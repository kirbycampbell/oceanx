import React, { Component } from "react";
import { googleSearch } from "./../actions/barActions";
import { connect } from "react-redux";
import BarContainer from "./BarContainer";

class BarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: []
    };
  }

  render() {
    let formFields = {};
    return (
      <div>
        <BarContainer />
        <div className="input-field col s6">
          <form
            className="col s12"
            onSubmit={e => {
              e.preventDefault();
              this.props.googleSearch(formFields.search.value);
            }}
          >
            <input
              ref={input => (formFields.search = input)}
              placeholder="Search for Bar"
            />
            <input className="btn waves-effect waves-light" type="submit" />
          </form>
        </div>

        {this.props.bars.map(bar => {
          return (
            <div className="card" key={bar.id}>
              <h2>{bar.name}</h2>
              <p>{bar.formatted_address}</p>

              <p>{bar.rating}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    bars: state.bars
  };
};

export default connect(
  mapStatesToProps,
  { googleSearch }
)(BarList);
