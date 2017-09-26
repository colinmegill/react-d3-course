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

class Scatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: Math.random() * 200,
      y: Math.random() * 200,
      r: Math.random() * 50,
      color: '#'+(Math.random()*0xFFFFFF<<0).toString(16) // !
    };
  }

  render() {
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div>
        <Heading> Scatter </Heading>
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
                  cx={tween.x}
                  cy={tween.y}
                  fill={tween.color}
                  r={tween.r}/>
              )
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default Scatter;

/*

<VictoryAxis
  padding={{
    top: 0,
    bottom: 0,
    left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
    right: rightPadding // this is confusing, but ok
  }}
  domain={x.domain()}
  offsetY={bottomPadding}
  width={entropyChartWidth}
  standalone={false}
  label={"Position"}
/>
<VictoryAxis
  dependentAxis
  padding={{
    top: 0,
    bottom: bottomPadding,
    left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
    right: rightPadding / 2 // bug? why is that / 2 necessary...
  }}
  domain={y.domain()}
  offsetY={bottomPadding}
  width={entropyChartWidth}
  standalone={false}
/>

*/
