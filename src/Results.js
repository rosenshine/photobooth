import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <p>You can find these photos at www.pleasesavethedate.com/photos</p>
        <Link to='/'><Button variant="contained" color="secondary">
          Start over
        </Button></Link>
     </div>
    );
  }
}

export default Results;

