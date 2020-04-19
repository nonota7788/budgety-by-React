import React, { Component } from "react";
import "./overview.style.css";

class Overview extends Component {
  render() {
    const { inc, exp, formatNum } = this.props;
    const inctotal = this.getTotalNum(inc);
    const expTotal = this.getTotalNum(exp);
    const total = inctotal - expTotal;
    return (
      <div className="overview">
        <div className="overview__container">
          <div className="overview__sum">{formatNum(null, total)}</div>
          <div className="overview__inc">
            Income{"  "}
            <span className="overview__inc-value">
              {formatNum("inc", inctotal)}
            </span>
            <span className="overview__exp--per">&nbsp;</span>
          </div>
          <div className="overview__exp">
            Expense{" "}
            <span className="overview__exp-value">
              {formatNum("exp", expTotal)}
            </span>
            <span className="overview__exp--per">
              {inctotal ? Math.round((expTotal / inctotal) * 100) : "---"} %
            </span>
          </div>
        </div>
      </div>
    );
  }

  getTotalNum(type) {
    return type.reduce((acc, cur) => {
      acc += parseInt(cur.value, 10);
      return acc;
    }, 0);
  }
}

export default Overview;
