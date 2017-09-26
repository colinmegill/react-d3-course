
import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import Heading from "../framework/heading";
import {VictoryAxis, VictoryAnimation} from "victory";

class PointAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 100,
      color: 'red'
    };
  }

  changePosition() {
    if (this.state.position === 100) {
      this.setState({position: 600, color: 'blue'})
    } else {
      this.setState({position: 100, color: 'red'})
    }
  }

  render() {
    return (
      <div>
        <Heading> Animated Point</Heading>
        <div>
          <button
            style={{border: "1px solid lightgrey", marginTop: 10, padding: 20}}
            onClick={this.changePosition.bind(this)}>
            Animate
          </button>
        </div>
        <svg height={500} width={1200} style={{border: "1px solid rgb(230,230,230)"}}>
          {
            <VictoryAnimation data={{x: this.state.position, color: this.state.color}}>
              {(tween) => {
                console.log(tween)
                return (<circle cx={tween.x} cy={100} fill={tween.color} r="100" />)
              }}
            </VictoryAnimation>
          }
        </svg>
      </div>
    );
  }
}

export default PointAnimation
