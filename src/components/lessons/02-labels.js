import React from "react";
import {connect} from "react-redux";

@connect((state) => {
  console.log("connect in labels sees: ", state)
  return {
    radius: state.kittenReducer.radius,
    color: state.kittenReducer.color,
    x: state.kittenReducer.x
  };
})
class Labels extends React.Component {
  handleClick() {
    this.props.dispatch({
      type: "KITTEN"
    });
  }
  handleMoveRight() {
    this.props.dispatch({
      type: "MOVE_RIGHT"
    })
  }

  componentDidMount() {
    console.log('map object', L)
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);


    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiY29saW5tZWdpbGwiLCJhIjoiY2o4NHNyMjhqMGRkbDJxb2FvdnRxemN4aSJ9.u3xAok69HzQ7loKdk83NaA',
    }).addTo(mymap);



  }

  render() {

    return (
      <div>
        <div style={{height: 500, width: 500, border: "1px solid green"}} id="mapid"></div>
        <button onClick={this.handleClick.bind(this)}> Radius ++ </button>
        <button onClick={this.handleMoveRight.bind(this)}> ➵ </button>
        <svg height={500} width={500}>
          <circle
            fill={this.props.radius < 40 ? "red" : this.props.color }
            cx={this.props.x}
            cy={200}
            r={this.props.radius}/>
        </svg>
      </div>
    );
  }
}

export default Labels;
