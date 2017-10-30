import React from "react";
import Radium from "radium";
import _ from "lodash";
import { connect } from "react-redux";

@connect((state) => {
  console.log("connect in controls sees: ", state)
  return {
    colorBy: state.ColorBy.colorBy
  };
})
class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  getStyles() {
    return {
      base: {

      }
    };
  }
  render() {
    return (
      <div>
        <p> Color By </p>
        <button
          style={{
            border: this.props.colorBy === "A" ? "3px solid red" : "3px solid black",
            padding: "10px 20px",
            borderRadius: 3,
            background: "none",
          }}
          onClick={() => { this.props.dispatch({type: "colorBy changed", data: "A"}) }}>
          A
        </button>
        <button
          style={{
            border: this.props.colorBy === "B" ? "3px solid red" : "3px solid black",
            padding: "10px 20px",
            borderRadius: 3,
            background: "none",
          }}
          onClick={() => { this.props.dispatch({type: "colorBy changed", data: "B"}) }}>
          B
        </button>
        <button
          style={{
            border: this.props.colorBy === "C" ? "3px solid red" : "3px solid black",
            padding: "10px 20px",
            borderRadius: 3,
            background: "none",
          }}
          onClick={() => { this.props.dispatch({type: "colorBy changed", data: "C"}) }}>
          C
        </button>
      </div>
    );
  }
}

export default Controls;
