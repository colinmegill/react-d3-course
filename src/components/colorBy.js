import React from "react";
import Radium from "radium";
import _ from "lodash";
import { connect } from "react-redux";

const Button = ({option, isSelected, handleClick}) => {
  return (
    <button
      style={{
        border: isSelected ? "3px solid red" : "3px solid black",
        padding: "10px 20px",
        borderRadius: 3,
        background: "none",
      }}
      onClick={handleClick(option)}
    >
      {option}
    </button>
  );
};

@connect((state) => {
  console.log("connect in controls sees: ", state)
  return {
    colorBy: state.ColorBy.colorBy,
    colorByOptions: state.ColorBy.colorByOptions
  };
})
class ColorBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick(datum) {
    return () => {
      this.props.dispatch({type: "colorBy changed", data: datum})
    }
  }
  render() {
    return (
      <div>
        {this.props.colorByOptions.map((option) => {
          return (
            <Button
              key={option}
              option={option}
              handleClick={this.handleClick.bind(this)}
              isSelected={this.props.colorBy === option}/>
          )
        })}
      </div>
    );
  }
}

export default ColorBy;

// <button
//   style={{
//     border: this.props.colorBy === "A" ? "3px solid red" : "3px solid black",
//     padding: "10px 20px",
//     borderRadius: 3,
//     background: "none",
//   }}
//   onClick={() => { this.props.dispatch({type: "colorBy changed", data: "A"}) }}>
//   A
// </button>
