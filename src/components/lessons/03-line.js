import React from "react";
import Radium from "radium";
import _ from "lodash";
import * as d3 from "d3";
import picketty from "../../data/picketty";
import Heading from "../framework/heading";

import {VictoryAxis} from "victory";

class Line extends React.Component {
  render() {
    console.log(picketty)

    const datasetUS = picketty.map((timeslice) => {
      return {
        // convert to date to make our life easier down the road
        date: new Date(timeslice["Date"]),
        value: timeslice["U.S."]
      }
    })
    .reverse(); // newer dates first


    const leftPadding = 60;
    const rightPadding = 60;
    const topPadding = 50;
    const bottomPadding = 50;
    const chartHeight = 300;
    const chartWidth = 800;

    // Y-Axis and Scale
    const ymax = d3.max(datasetUS.map(function(d){ return d.value; }));
    const y = d3.scaleLinear().domain([0, ymax])
                  .range([0, chartHeight - topPadding - bottomPadding]);

    // X-Axis and Scale
    const dates = datasetUS.map(function(d){ return d.date; });
    const x = d3.scaleTime().domain(d3.extent(dates))
                  .range([0, chartWidth - leftPadding - rightPadding]);

    // Function to draw the line
    // https://github.com/d3/d3-shape#curveStepAfter
    const line = d3.line().curve(d3.curveStepAfter)
                    .x(function(d, i) { return x(d.date); })
                    .y(function(d, i) { return y(d.value); });


    // Better axis styling
    const axisStyle = {
      axis: {stroke: "#756f6a"},
      axisLabel: {fontSize: 12, padding: 20, fontFamily: "Monaco"},
      ticks: {stroke: "grey"},
      tickLabels: {fontSize: 10, padding: 5, fontFamily: "Monaco"}
    };
    const zeroPadding = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    return (
      <div>
        <Heading> Line </Heading>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          <g transform={"translate(" + topPadding + "," + leftPadding + ")"}>

            // The path
            <path
              style={{
                fill: "none",
                stroke: "steelblue",
                strokeWidth: "2px"
              }}
              d={line(datasetUS)}
            />

            // Y-Axis
            <VictoryAxis
              dependentAxis
              style={axisStyle}
              padding={zeroPadding}
              domain={y.domain()}
              height={chartHeight - topPadding - bottomPadding}
              standalone={false}
              label={"$$$$"}
            />

            // X-Axis
            <VictoryAxis
              style={axisStyle}
              padding={zeroPadding}
              domain={x.domain()}
              tickFormat={d3.timeFormat("%x")}
              tickCount={6}
              height={chartHeight - topPadding - bottomPadding}
              width={chartWidth - leftPadding - rightPadding}
              standalone={false}
              label={"Date"}
            />

          </g>
        </svg>
      </div>
    );
  }
}

export default Line;
