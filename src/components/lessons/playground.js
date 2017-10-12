import React from "react";
import _ from "lodash";

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

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
    };
  }
  componentDidMount() {

    d3.select("#axisY")
        .append("g")
        .call(d3.axisLeft(y))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Size");
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.setState({counter: this.state.counter + 5}) }}>
          Increment
        </button>
        {this.state.counter}
        <div>
          <svg

            style={{
              border: "1px solid lightgrey"
            }}
            height={chartSide}
            width={chartSide}>
            <g
              id="axisY"
              transform={`translate(${chartMargins - 10},${-chartMargins})`}>
            </g>
            {
              _.map(data, (d, i) => <Bar key={i} name={d.name} d={d.size} i={i}/>)
            }
          </svg>
        </div>
      </div>
    );
  }
}

export default Playground;

// <circle
//   cx={250}
//   cy={250}
//   r={this.state.counter}
//   />
