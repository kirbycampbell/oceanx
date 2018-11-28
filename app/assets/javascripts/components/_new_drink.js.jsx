var NewDrink = React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;

    $.ajax({
      url: "/api/v1/drinks",
      type: "POST",
      data: { drink: { title: title, description: description } },
      success: drink => {
        this.props.handleSubmit(drink);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref="name" placeholder="Enter the name of the drink" />
        <input ref="description" placeholder="Enter a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});
