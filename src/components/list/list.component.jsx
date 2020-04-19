import React, { Component } from "react";
import ListItem from "../list-item/list-item.component";
import "./list.style.css";

class List extends Component {
  render() {
    const { items, onDelete, formatNum } = this.props;
    return (
      <div className="list__container">
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            formatNum={formatNum}
          />
        ))}
      </div>
    );
  }
}

export default List;
