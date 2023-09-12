import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ number: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.number);
  }

  render() {
    return (
      <div>
        <h1>How to Allow Only Numbers in Textbox in React</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
