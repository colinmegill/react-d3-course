import React from "react";

const Counter2 = ({counter}) => {
  return (
    <div>As percent: {counter * 100}%</div>
  );
};

class LearnReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: .51
    };
  }

  render() {
    return (
      <div>
        Hello Learn React Component
        <div>
        As decimal: {this.state.counter}
        </div>
        <Counter2 counter={this.state.counter} />
        <button
          onClick={() => {
            this.setState({counter: this.state.counter + .01})
          }}>
          Increment by .01
        </button>
      </div>
    );
  }
}

export default LearnReact;
