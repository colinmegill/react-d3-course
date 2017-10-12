/*

beetles dataset
& random in setstate for playing with animations

import {scatterplotGenerator} from "../data/generators";

*/

import React from "react";
import _ from "lodash";
import * as d3 from "d3";
import * as chromatic from "d3-scale-chromatic";
import beetles from "../../data/beetles";
import Heading from "../framework/heading";
import {VictoryAxis, VictoryAnimation} from "victory";

class CircleTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 10
    };
  }
  render() {
    return (
      <div>
        <p> Circle Two</p>
        <svg width={100} height={100} style={{border: "1px solid grey"}}>
          <circle
            onClick={this.props.callbackFromParentForClick(this.state.r)}
            fill={this.props.color}
            cx={40}
            cy={40}
            r={this.state.r}/>
        </svg>
      </div>
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
      <p> Circle One </p>
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
        </div>
      </div>
    )
  }
}





class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorToTransfer: null,
      sizeToTransfer: null,
      beetleOfInterest: null
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

  componentDidMount() {
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 700 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleLinear()
              .range([0, width])
              .domain(d3.extent(beetles, (d) => { return d.Width; }));

    var y = d3.scaleLinear()
              .range([height, 0])
              .domain([0, d3.max(beetles, (d) => { return d.Angle; })])

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#scatterplotAttachPointD3").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

              console.log("chromatic", chromatic)

      // Add the scatterplot
      const dots = svg.selectAll("dot")
          .data(beetles)
        .enter().append("circle")
          .attr("r", 3)
          .attr("fill", (d) => {
            let color = "rgb(0,0,0)";
            if (d.Species === "Con") {
              color = chromatic.schemePastel1[0]
            } else if (d.Species === "Hei") {
              color = chromatic.schemePastel1[1]
            } else if (d.Species === "Hep") {
              color = chromatic.schemePastel1[2]
            }
            return color;
          })
          .attr("cx", (d) => { return x(d.Width); })
          .attr("cy", (d) => { return y(d.Angle); });

      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));

      this.setState({
        svg
      })
  }

  componentDidUpdate() {
    console.log('updated!')
    if (this.state.beetleOfInterest) {
      const subset = _.filter(beetles, {Species: this.state.beetleOfInterest});

      console.log('subset', subset)

      d3.select("#scatterplotAttachPointD3")
        .selectAll("dot")
        .data(subset)
        .enter()
        .append("circle")
        .attr("r", 3)
        .attr("fill", (d) => {
          let color = "rgb(0,0,0)";
          if (d.Species === "Con") {
            color = chromatic.schemePastel1[0]
          } else if (d.Species === "Hei") {
            color = chromatic.schemePastel1[1]
          } else if (d.Species === "Hep") {
            color = chromatic.schemePastel1[2]
          }
          return color;
        })
        .attr("cx", (d) => { return x(d.Width); })
        .attr("cy", (d) => { return y(d.Angle); })
        .exit().remove()
;
    }
  }

  render() {
    console.log("parent sees", this.state)
    const buttonStyle = {
      marginRight: 20,
      backgroundColor: "steelblue",
      color: "white",
      border: "none",
      borderRadius: 3,
      padding: "7px 14px",
    }
    return (
      <div>
        <Heading> Scatter </Heading>
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({beetleOfInterest: "Hei"})}
          }>
          Hei
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({beetleOfInterest: "Hep"})}
          }>
          Hep
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({beetleOfInterest: "Con"})}
          }>
          Con
        </button>
        <div id="scatterplotAttachPointD3">

        </div>
        <CircleOne
          callbackFromParentForClick={this.handleCircleOneClick.bind(this)}
          size={
            this.state.sizeToTransfer ?
            this.state.sizeToTransfer : null
          }
          />
        <CircleTwo
          callbackFromParentForClick={this.handleCircleTwoClick.bind(this)}
          color={
            this.state.colorToTransfer ?
            this.state.colorToTransfer : "rgb(250,0,0)"
          }
          />
      </div>
    );
  }
}

export default Parent;
