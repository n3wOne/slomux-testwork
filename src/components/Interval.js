import React from "react";
import { connect } from "../utils/connect";
import { changeInterval } from "../actions/actions";

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>
          Интервал обновления секундомера: {this.props.currentInterval} сек.
        </span>
        <span>
          <button onClick={() => this.props.changeInterval(-1)}>-</button>
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

export const Interval = connect(
  (state) => state,
  (dispatch) => ({
    changeInterval: (value) => dispatch(changeInterval(value)),
  })
)(IntervalComponent);
