/*

beetles dataset
& random in setstate for playing with animations

*/

import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import {scatterplotGenerator} from "../../data/generators";
import Heading from "../framework/heading";
import {VictoryAxis, VictoryAnimation} from "victory";

class Scatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 100
    };
  }
  changePosition() {

    this.setState({position: this.state.position === 100 ? 200 : 100})
  }
  render() {
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight]);
    return (
      <div>
        <Heading> Animated Scatterplot </Heading>
        <button onClick={this.changePosition.bind(this)}> Change position </button>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          <VictoryAnimation data={{x: this.state.position}}>
            {(tween) => {
                return (<circle cx={tween.x} cy={300} r="3"/>)
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
