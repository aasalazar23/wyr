import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/shared"

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = e => {
    const optionText = e.target.value;
    const option = e.target.name;

    this.setState(() => ({
      [option]: optionText,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state; // extracts text from state
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      // reset text box to empty string
      optionOne: "",
      optionTwo: "",
    }));

    this.props.history.push('/')

  };
  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div>
        <h3 className="center">Would You Rather?</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Would you rather... A:"
            value={optionOneText}
            name="optionOne"
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          <textarea
            placeholder="Would you rather... B:"
            value={optionTwoText}
            name="optionTwo"
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          <button className="btn" type="submit" disabled={optionOneText === "" || optionTwoText === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion))
