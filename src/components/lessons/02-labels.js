/*

componetization

*/

import React from "react";
import Radium from "radium";
// import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";

class Labels extends React.Component {
  render() {
    console.log(mountains)
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight]);
    return (
      <div style={{margin: 20}}>
        <Heading> Labels </Heading>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          {mountains.map((mountain, i) => {
            if (i < 15) {
              return (
                <rect
                fill={"rgba(255,0,0,.2)"}
                x={i*6 + leftPadding}
                y={chartHeight - bottomPadding - y(mountain["Height (ft)"])}
                width={4}
                height={y(mountain["Height (ft)"])}/>
              )
            }
          })}
        </svg>
      </div>
    );
  }
}

export default Labels;
