var Body = React.createClass({
  getInitialState() {
    return { drinks: [] };
  },
  componentDidMount() {
    $.getJSON("/api/v1/drinks.json", response => {
      this.setState({ drinks: response });
    });
  },
  handleSubmit(drink) {
    var newState = this.state.drinks.concat(drink);
    this.setState({ drinks: newState });
  },
  render() {
    return (
      <div>
        <NewDrink handleSubmit={this.handleSubmit} />
        <AllDrinks drinks={this.state.drinks} />
      </div>
    );
  }
});
