import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list.component";
import Form from "./components/form/form.component";
import Overview from "./components/overview/overview.component";

class App extends Component {
  state = {
    items: [],
  };

  handleDelete = (item) => {
    const items = this.state.items.filter((i) => i.id !== item.id);
    this.setState({ items });
  };

  handleAddItem = (item) => {
    const newItem = { id: Math.random(), ...item };
    const items = [...this.state.items, newItem];
    this.setState({ items });
  };

  render() {
    return (
      <React.Fragment>
        <Overview
          inc={this.state.items.filter((item) => item.type === "inc")}
          exp={this.state.items.filter((item) => item.type === "exp")}
          formatNum={this.formatNumber}
        />
        <Form onAddItem={this.handleAddItem} />
        <div className="container">
          <List
            items={this.state.items}
            onDelete={this.handleDelete}
            formatNum={this.formatNumber}
          />
        </div>
      </React.Fragment>
    );
  }

  formatNumber(type, value) {
    value = parseInt(value, 10).toLocaleString("en", {
      style: "decimal",
      minimumFractionDigits: 2,
    });

    return type ? (type === "inc" ? `+ ${value}` : `- ${value}`) : value;
  }
}

export default App;
