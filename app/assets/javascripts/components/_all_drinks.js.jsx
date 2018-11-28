var AllDrinks = React.createClass({
  render() {
    var drinks = this.props.drinks.map(drink => {
      return (
        <div key={drink.id}>
          <h3>{drink.title}</h3>
          <p>{drink.description}</p>
        </div>
      );
    });

    return <div>{drinks}</div>;
  }
});
