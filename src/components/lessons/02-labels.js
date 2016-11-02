import React from "react";
import {connect} from "react-redux";

@connect((state) => {
  console.log(state)
  return {
    radius: state.kittenReducer.radius,
    color: state.kittenReducer.color
  };
})
class Labels extends React.Component {
  handleClick() {
    this.props.dispatch({
      type: "KITTEN"
    });
  }
  render() {

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}> Radius ++ </button>
      <svg height={500} width={800}>
        <circle
          fill={this.props.radius < 40 ? "red" : this.props.color }
          cx={200}
          cy={200}
          r={this.props.radius}/>
      </svg>
      </div>
    );
  }
}

export default Labels;
