/*

nobels dataset
http://www.businessinsider.com/nobel-prizes-by-country-since-1901-2014-10
http://www.nobelprize.org/nomination/map1/nominees.html

*/

import React from "react";
import Radium from "radium";

@Radium
class Nobel extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default Nobel;
