import React, {Component} from "react";
import Keypad from "./Keypad";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyPressed: '',
      currentDisplayValue: '',
      currentSum: 0
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.doSum = this.doSum.bind(this);
  }

  updateDisplay(value) {
    this.setState({
      currentDisplayValue: value
    });
  }

  doSum(value, keyPressed) {
    // let newSum = this.state.currentSum + parseInt(value);
    // this.setState({
    //   currentSum: newSum,
    //   currentDisplayValue: newSum
    // });

    this.setState((prevState, props) => {
      if (keyPressed == '=') {
        return {
          currentSum: 0,
          currentDisplayValue: prevState.currentSum + parseInt(value)
        }
      }
      else {
        return {
          currentSum: prevState.currentSum + parseInt(value),
          currentDisplayValue: prevState.currentSum + parseInt(value)
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Display currentDisplayValue={this.state.currentDisplayValue} />
        <Keypad currentDisplayValue={this.state.currentDisplayValue} doSum={this.doSum} updateDisplay={this.updateDisplay} />
      </div>
    );
  }
}

export default App;
