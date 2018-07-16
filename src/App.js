import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import Router from "react-router-dom/BrowserRouter";
import { AnimatedSwitch } from "react-router-transition";
import Route from "react-router-dom/Route";
import Home from "./Home.js";
import TakePhoto from "./TakePhoto.js";
import Results from "./Results.js";
import history from "./history";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          {/* <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          > */}
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/takephoto/" component={TakePhoto} />
            <Route path="/results/" component={Results} />
          </div>
          {/* </AnimatedSwitch> */}
        </Router>
      </div>
    );
  }
}

export default App;
