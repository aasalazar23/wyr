import React, { Component } from "react";
import serverDownSVG from "../assets/undraw_server_down_s4lk.svg";

class ErrorPage extends Component {
  render() {
    const { error } = this.props;

    return (
      <div>
        <img
          src={serverDownSVG}
          alt="server problems"
          style={{ display: "block", maxWidth: "24rem", margin: "auto" }}
        />
        <h2>Oh no... that's an error</h2>
        <p>
          Support has been notified. If you need immediate assistance, please
          reach out to{" "}
          <a href="mailto:aasalazar@gmail.com">Alejandro</a>
        </p>
        <br />
        <p>Here's some more information if you want to take a look...</p>
        <details>
          <p>
            <strong>Error:</strong> {error.message.toString()}
          </p>
          <p>
            <strong>Stacktrace:</strong> {error.stack}
          </p>
        </details>
      </div>
    );
  }
}

export default ErrorPage;
