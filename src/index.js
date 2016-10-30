// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
// React Redux
import { Provider, connect } from 'react-redux';
// Redux Devtools

import configureStore from "./store";

// controller view
import App from "./components/app";
import Bar from "./components/lessons/01-bar";
import Labels from "./components/lessons/02-labels";
import Line from "./components/lessons/03-line";
import Scatter from "./components/lessons/04-scatter";
import Tree from "./components/lessons/05-tree";
import Hexbin from "./components/lessons/06-hexbin";
import Multiline from "./components/lessons/07-multi-line";
import Nobels from "./components/lessons/nobels";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Router path="bar" component={Bar}/>
            <Router path="labels" component={Labels}/>
            <Router path="line" component={Line}/>
            <Router path="scatter" component={Scatter}/>
            <Router path="tree" component={Tree}/>
            <Router path="hexbin" component={Hexbin}/>
            <Router path="multiline" component={Multiline}/>
            <Router path="nobel" component={Nobels}/>
          </Router>
        </Provider>
      </div>
    );
  }
}

// for material ui
import injectTapEventPlugin from "react-tap-event-plugin";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<Root/>, document.getElementById("root"));
