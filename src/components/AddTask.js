import React, { Component } from "react";
import "./AddTask.css";

const minDate = new Date().toISOString().slice(0, 10);

const maxDate = new Date().toISOString().slice(0, 4) * 1 + 1;
class AddTask extends Component {
  state = {
    text: "",
    important: false,
    date: minDate,
  };

  handleChangeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleCheckbox = (e) => {
    this.setState({
      important: e.target.checked,
    });
  };
  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleClick = () => {
    const { text, date, important } = this.state;
    const add = this.props.addTask(text, date, important);
    if (add) {
      this.setState({
        text: "",
        important: false,
        date: minDate,
      });
    }
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add your task here"
          value={this.state.text}
          onChange={this.handleChangeInput}
        />
        <br />
        <label htmlFor="checkbox">
          {" "}
          <input
            type="checkbox"
            checked={this.state.important}
            id="checkbox"
            onChange={this.handleCheckbox}
          />
          priority
        </label>
        <br />
        <label htmlFor="date">
          {" "}
          It will be done by:
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleChangeDate}
            min={minDate}
            max={maxDate + "-12-31"}
          />{" "}
        </label>
        <br />
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  }
}

export default AddTask;
