import React, { Component } from 'react';

const KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "="];
let buttons = [];

class Keypad extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    buttons = KEYS.map(function(key, index) {
      return <button className="buttons" key={ index } onClick={this.handleClick}>{ key }</button>
    }, this)

    this.state = {clearDisplay: true};
  }

  render() {
    return (
      <div className="keypad">
        { buttons }
      </div>
    )
  }

  handleClick(event) {
    let keyValue = event.currentTarget.textContent;

    if (keyValue != '0' || !this.state.clearDisplay) { // don't add '0' if it's the first char of the input

      // if operation is '+' or '=', calculate and store current sum, prep display to clear
      if (keyValue == '+' || keyValue == '=') {
        this.setState({
          clearDisplay: true
        });
        this.props.doSum(this.props.currentDisplayValue, keyValue);
      }
      // update the display value, either use new string or append to existing string
      else {
        if (this.state.clearDisplay) {
          this.props.updateDisplay(keyValue);
          this.setState({
            clearDisplay: false
          });
        }
        else {
          this.props.updateDisplay(this.props.currentDisplayValue + keyValue);
        }
      }
    }
  }
}

export default Keypad;
