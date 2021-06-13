import React, { PureComponent } from "react";
import "./style.css";
class Timer extends PureComponent {
  state = {
    count: 0,
  };
  intervalid = null;

  starthandelet = () => {
    if (this.state.count > 0 && !this.intervalid) {
      this.intervalid = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer Finish");
            clearInterval(this.intervalid);
            this.intervalid = null;
          }
        });
      }, 1000);
    }
  };

  stophandeler = () => {
    if (this.intervalid) {
      clearInterval(this.intervalid);
      this.intervalid = null;
    }
  };

  resethandeler = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalid);
    this.intervalid = null;
  };

  incriment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  drecriment = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div className="container">
        <h2>Simple timer react</h2>

        <div>
          <button onClick={this.drecriment}>-</button>
          <span> {this.state.count} </span>
          <button onClick={this.incriment}>+</button>
        </div>

        <div>
          <button onClick={this.starthandelet}>Start</button>
          <button onClick={this.stophandeler}>stop</button>
          <button onClick={this.resethandeler}>reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
