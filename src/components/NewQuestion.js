import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions"

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChangeOne = e => {
    const optionOneText = e.target.value;

    this.setState(() => ({
      optionOneText,
    }));
  };

  handleChangeTwo = e => {
    const optionTwoText = e.target.value;

    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state; // extracts text from state
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      // reset text box to empty string
      optionOneText: "",
      optionTwoText: "",
    }));
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
            onChange={this.handleChangeOne}
            className="textarea"
            maxLength={280}
          />
          <textarea
            placeholder="Would you rather... B:"
            value={optionTwoText}
            onChange={this.handleChangeTwo}
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

export default connect()(NewQuestion)