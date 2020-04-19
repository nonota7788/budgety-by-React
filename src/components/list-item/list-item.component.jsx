import React, { Component } from "react";
import "./list-item.style.css";

class ListItem extends Component {
  render() {
    const { item, onDelete, formatNum } = this.props;
    return (
      <div className="listItem">
        <div className={`listItem__description ${this.getTypeClasses()}`}>
          {item.desc}
        </div>
        <div className={`listItem__value ${this.getTypeClasses()}`}>
          {formatNum(item.type, item.value)}
        </div>
        <div className="listItem__btn">
          <button className="listItem__btn--del" onClick={() => onDelete(item)}>
            x
          </button>
        </div>
      </div>
    );
  }

  getTypeClasses() {
    const { type } = this.props.item;
    return type === "inc" ? "type__inc" : "type__exp";
  }
}

export default ListItem;
