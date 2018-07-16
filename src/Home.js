import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>Welcome to Cheezbot 3000</p>
        <Link to='/takephoto'><Button variant="contained" color="secondary">
          Ready?
        </Button></Link>
     </div>
    );
  }
}

export default Home;

