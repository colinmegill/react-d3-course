import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {scatterplotGenerator} from "../../data/generators";

const data = [
  {"name": "A", "size": 5},
  {"name": "B", "size": 10},
  {"name": "C", "size": 15},
  {"name": "D", "size": 40},
  {"name": "E", "size": 45},
  {"name": "F", "size": 50},
  {"name": "G", "size": 50},
  {"name": "H", "size": 50},
  {"name": "I", "size": 55},
  {"name": "J", "size": 75},
];

const chartSide = 500;
const barWidth = 20;
const paddingBetweenBars = 10;
const chartMargins = 50;
const textLabelOffsetX = 5;
const textLabelOffsetY = 15;

const y = d3.scaleLinear()
      .rangeRound([chartSide, 0])
      .domain([
        0,
        d3.max(data, (d) => {
          return d.size;
        })
      ]);

class Bar extends React.Component {
  render () {
    return (
      <g>
        <rect
          fill={"rgba(0,0,255,.2)"}
          x={chartMargins + (this.props.i * (barWidth + paddingBetweenBars))}
          y={chartSide - y(this.props.d) - chartMargins}
          height={y(this.props.d)}
          width={barWidth}/>
          <text
            x={textLabelOffsetX + chartMargins + (this.props.i * (barWidth + paddingBetweenBars))}
            y={chartSide - chartMargins + textLabelOffsetY}
            fontFamily="Helvetica"
            fontSize="14">
            {this.props.name}
          </text>
      </g>
    )
  }
}

@connect((state) => {
  console.log("connect in controls sees: ", state)
  return {
    colorBy: state.ColorBy.colorBy,
    colorByOptions: state.ColorBy.colorByOptions
  };
})
class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
      d3elem: null,
    };
  }
  componentDidMount() {
    const canvasElem = d3.select("#canvasAttachPoint")
      .append("canvas")
      .attr("width", 500)
      .attr("height", 500)

    const canvasContext = canvasElem.node().getContext("2d");

    this.setState({canvasContext})
  }
  componentDidUpdate() {
    if (this.state.canvasContext) {
      this.drawGraph()
    }
  }

  drawGraph() {
    this.state.canvasContext.clearRect(0,0,500,500)
    const scatterData = scatterplotGenerator()
    scatterData.forEach((d) => {
      this.state.canvasContext.beginPath()
      this.state.canvasContext.arc(
        d[0],
        d[1],
        6,
        0,
        1
      )
      this.state.canvasContext.fill()
      // this.state.canvasContext.fillStyle("rgb(0,0,0)")
    })

  }

  render() {
    return (
      <div id="canvasAttachPoint">

      </div>
    );
  }
}

export default Playground;



// componentWillReceiveProps(nextProps) {
//   if (
//     this.state.d3elem
//   ) {
//     this.doUpdateCircle();
//   }
// }

// doUpdateCircle() {
//   this.state.d3elem
//     .attr("fill", this.getFill.bind(this));
// }
// getFill() {
//   let fill = "black";
//   if (this.props.colorBy === "A") {
//     fill = "red"
//   } else if (this.props.colorBy === "B") {
//     fill = "blue"
//   } else if (this.props.colorBy === "C") {
//     fill = "orange"
//   }
//   return fill;
// }

// <svg
//   style={{
//     border: "1px solid lightgrey"
//   }}
//   height={chartSide}
//   width={chartSide}>
//   <g id="d3circleAttachPoint"></g>
// </svg>

// <button onClick={() => { this.setState({counter: this.state.counter + 5}) }}>
//   Increment
// </button>

// <g
//   id="axisY"
//   transform={`translate(${chartMargins - 10},${-chartMargins})`}>
// </g>
// {
//   _.map(data, (d, i) => <Bar key={i} name={d.name} d={d.size} i={i}/>)
// }


// d3.select("#axisY")
//     .append("g")
//     .call(d3.axisLeft(y))
//   .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end")
//     .text("Size");
