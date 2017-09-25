/*
  Managing scales
  Options for axis
*/

import React from "react";
import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";
import {VictoryAxis} from "victory";

class Bar extends React.Component {
  render() {
    console.log(mountains)
    const leftPadding = 100;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    // {_.maxBy(mountains, (m) => { return m["Height (ft)"]} )}
    return (
      <div>
        <Heading> Bar Chart </Heading>
          <svg
            height={chartHeight}
            width={chartWidth}
            style={{border: "1px solid rgb(230,230,230)"}}>
            <line
              x1="70"
              y1="70"
              x2="70"
              y2={chartHeight - bottomPadding}
              stroke-width="2"
              stroke="black"/>
              <text x="70" y="70"  fontSize="14">
                {_.maxBy(mountains, (m) => { return m["Height (ft)"]} )["Height (ft)"]}
              </text>
              <text x="70" y={chartHeight - bottomPadding} fontSize="14">
                0
              </text>
            {
              mountains.map((mountain, i) => {
                return (
                  <rect
                    fill={"rgba(0,0,0,1)"}
                    x={i*6 + leftPadding}
                    y={
                      chartHeight -
                      bottomPadding -
                      y(mountain["Height (ft)"])
                    }
                    width={4}
                    height={y(mountain["Height (ft)"])}/>
                )
              })
            }
          </svg>
      </div>
    );
  }
}

export default Bar;

//
// <p>
//   {`
//   ${mountain.Mountain} is in the range
//   ${mountain.Range} and it's
//   ${mountain["Height (m)"]} high.
//   `}
// </p>
//
