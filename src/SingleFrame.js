import * as fs from "fs";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import history from "./history";
import { withRouter } from "react-router-dom";
const homedir = require('os').homedir();
const { StillCamera } = require("pi-camera-connect");

class SingleFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 5 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.countFromFive(), 1000);
 
    const stillCamera = new StillCamera();
    
    stillCamera.takeImage().then(image => {
 
      fs.writeFileSync("still-image.jpg", image);
    });
    // this.filePath = `${ __dirname }/test.jpg`;
    // console.log(__dirname, 'homedir');
    // const opts = {
    //   mode: 'photo',
    //   width: 640,
    //   height: 480,
    //   nopreview: false,
    //   output: this.filePath
    // }

    // const camera = new PiCamera({
    //     mode: 'photo',
    //     width: 640,
    //     height: 480,
    //     nopreview: false,
    //     output: this.filePath
    //   });

    // camera.capture('test1.jpg')
    // const PiCamera = require('pi-camera');
    // const myCamera = new PiCamera({
    //   mode: 'photo',
    //   output: `${ __dirname }/test.jpg`,
    //   width: 640,
    //   height: 480,
    //   nopreview: true,
    // });
    
    // myCamera.snap()
    //   .then((result) => {
    //     console.log(result);
    //     // Your picture was captured
    //   })
    //   .catch((error) => {
    //     // Handle your error
    //     console.log(error);
    //   });
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
