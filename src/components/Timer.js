import React from "react";
import { connect } from "../utils/connect";
import { changeInterval } from "../actions/actions";
import { Interval } from "./Interval";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentTime: 0,
    };
  }

  handleStart = () => {
    const { currentInterval, changeInterval } = this.props;
    if (currentInterval < 1) {
      alert("Interval cannot be less than 1 second");
      changeInterval(-1 * currentInterval + 1);
      return;
    }
    const interval = setInterval(
      () =>
        this.setState({
          currentTime: this.state.currentTime + this.props.currentInterval,
        }),
      this.props.currentInterval * 1000
    );
    this.setState({ intervalId: interval });
  };

  handleStop = () => {
    this.setState({ currentTime: 0 });
    clearInterval(this.state.intervalId);
  };

  render() {
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    );
  }
}

export const Timer = connect(
  (state) => ({
    currentInterval: state.currentInterval,
  }),
  (dispatch) => ({
    changeInterval: (value) => dispatch(changeInterval(value)),
  })
)(TimerComponent);
