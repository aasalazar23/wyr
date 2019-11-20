import React, { Component } from "react";
import Void from "../assets/undraw_void_3ggu.svg";

class NotFound extends Component {
  render() {
    return (
      <div>
        <img
          src={Void}
          alt="404 Not Found"
          style={{ display: "block", maxWidth: "24rem", margin: "auto" }}
        />
        <h1 className='center'>404.. You found nothing!</h1>
      </div>
    );
  }
}

export default NotFound;
