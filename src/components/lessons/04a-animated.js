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
      dataset: scatterplotGenerator(100)
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({dataset: scatterplotGenerator(100)})
    }, 1000)
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
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          {
            this.state.dataset.map((d, i) => {
              return (
                <VictoryAnimation key={i} data={{x: d[0], y: d[1]}}>
                  {(tween) => {
                    console.log(tween)
                      return (<circle cx={tween.x} cy={tween.y} key={i} r="3"/>)
                  }}
                </VictoryAnimation>
              )
            })
          }
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
