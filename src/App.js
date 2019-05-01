import React, { Component } from "react";
import Validation from "./components/Validation";
import Char from "./components/Char";
import "./App.css";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangedHandler = e => {
    this.setState({ userInput: e.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          key={index}
          letter={ch}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation input={this.state.userInput} />
        {charList}
      </div>
    );
  }
}

export default App;
