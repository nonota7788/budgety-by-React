import React, { Component } from "react";
import "./form.style.css";

class Form extends Component {
  state = {
    type: "inc",
    desc: "",
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { desc, value } = this.state;
    if (desc && value) this.props.onAddItem(this.state);

    this.setState({ type: "inc", desc: "", value: "" });
  };

  handleInputChange = (e) => {
    const currentState = this.state;
    const { name, value: input } = e.target;
    currentState[name] = input;

    this.setState({ [name]: input });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="type"
          value={this.state.type}
          onChange={this.handleInputChange}
        >
          <option value="inc" defaultChecked>
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          name="desc"
          type="text"
          value={this.state.desc}
          placeholder="description"
          onChange={this.handleInputChange}
        />
        <input
          name="value"
          type="number"
          value={this.state.value}
          placeholder="value"
          onChange={this.handleInputChange}
        />
        <input type="submit" value="+" />
      </form>
    );
  }
}

export default Form;
