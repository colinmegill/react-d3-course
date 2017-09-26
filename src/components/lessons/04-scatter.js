/*

beetles dataset
& random in setstate for playing with animations

import {scatterplotGenerator} from "../data/generators";

*/

import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import beetles from "../../data/beetles";
import Heading from "../framework/heading";
import {VictoryAxis, VictoryAnimation} from "victory";

class CircleTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 5
    };
  }
  render() {
    return (
      <svg width={100} height={100}>
        <circle
          onClick={this.props.callbackFromParentForClick(this.state.r)}
          fill={this.props.color}
          cx={40}
          cy={40}
          r={this.state.r}/>
      </svg>
    )
  }
}

class CircleOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: Math.random() * 50,
      y: Math.random() * 50,
      r: Math.random() * 20,
      color: '#'+(Math.random()*0xFFFFFF<<0).toString(16) // !
    };
  }
  render() {
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 300;
    const chartWidth = 300;
    return (
      <div>
      <button onClick={() => {
          this.setState({
            x: Math.random() * 200,
            y: Math.random() * 200,
            r: Math.random() * 50,
            color: '#'+(Math.random()*0xFFFFFF<<0).toString(16) // !
          })
        }}>
        Transition
      </button>
      <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
        <VictoryAnimation
          data={{
            x: this.state.x,
            y: this.state.y,
            r: this.state.r,
            color: this.state.color
          }}>
          {(tween) => {
            return (
              <circle
                onClick={this.props.callbackFromParentForClick(this.state.color)}
                cx={tween.x}
                cy={tween.y}
                fill={tween.color}
                r={ this.props.size ? this.props.size : tween.r}/>
            )
          }}
        </VictoryAnimation>
      </svg>
      </div>
    )
  }
}





class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorToTransfer: null,
      sizeToTransfer: null
    }
  }

  handleCircleOneClick(d) {
    return () => {
      console.log('circle 1 sees: ', d)
      this.setState({colorToTransfer: d})
    }
  }

  handleCircleTwoClick(r) {
    return () => {
      console.log('circle 2 sees: ', r)
      this.setState({sizeToTransfer: r})
    }
  }

  render() {
    console.log('parent sees', this.state)
    return (
      <div>
        <Heading> Scatter </Heading>
        <CircleTwo
          callbackFromParentForClick={this.handleCircleTwoClick.bind(this)}
          color={
            this.state.colorToTransfer ?
            this.state.colorToTransfer : "rgb(250,0,0)"
          }/>
          <CircleOne
            size={this.state.sizeToTransfer ? this.state.sizeToTransfer : null}
            callbackFromParentForClick={this.handleCircleOneClick.bind(this)}/>

      </div>
    );
  }
}

export default Parent;
