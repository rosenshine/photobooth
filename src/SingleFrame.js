import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import history from "./history";
import { withRouter } from "react-router-dom";
const PiCamera = require('pi-camera');
const homedir = require('os').homedir();

class SingleFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 5 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.countFromFive(), 1000);
  
    this.filePath = `${__dirname}/photos/test.jpg`;
    const opts = {
      mode: 'photo',
      width: 640,
      height: 480,
      nopreview: false,
      output: this.filePath
    }

    this.camera = new PiCamera({ opts });

    this.camera.snap()
      .then((result) => {
        // Your picture was captured
      })
      .catch((error) => {
        // Handle your error
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countFromFive() {
    let { seconds } = this.state;
    if (this.props.position === 4 && seconds === 1) {
      this.props.history.push("/results");
      clearInterval(this.timerID);
    } else if (this.props.position !== 4 && seconds === 1) {
      this.setState({ seconds: "" });
      this.props.nextFrame();
      clearInterval(this.timerID);
    }
    if (seconds > 1) {
      this.setState({
        seconds: seconds - 1
      });
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <p>Frame {this.props.position}</p>
        <h1>{this.state.seconds}</h1>
        <img src={this.filePath}/>
      </div>
    );
  }
  
}

export default withRouter(SingleFrame);
