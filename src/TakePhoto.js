import React, { Component } from "react";
import SingleFrame from "./SingleFrame";

class TakePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {frames: []};
  }

  componentDidMount() {
    this.goToNext();
  }

  render() {
    return (
      <div className="TakePhoto">
        <p>Say cheese!</p>
        <div className="frameholder">
          {this.state.frames}
        </div>
      </div>
    );
  }

  goToNext() {
    let frameCount = this.state.frames;
    const frame = <SingleFrame 
      key={frameCount.length}
      nextFrame={this.goToNext.bind(this)}
      position={frameCount.length + 1}
      className={'frame' + frameCount.length}
    />
    console.log(frame);
    frameCount.push(frame);
    this.setState({frames: frameCount});
  }
}

export default TakePhoto;
