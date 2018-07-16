import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Sarah from "./sarah.png";
import Jason from "./jason.png"
import Camera from "./cam.svg"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>Welcome to Cheezbot 3000!</p>
        <Link to='/takephoto'><Button variant="contained" color="secondary">
          Ready?
        </Button></Link>
        <br/>
        <img src={Sarah} alt="sarah" />
        <img src={Camera} alt="camera" />
        <img src={Jason} alt="jason" />
     </div>
    );
  }
}

export default Home;

