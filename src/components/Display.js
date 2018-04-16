import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type="text" value={this.props.currentDisplayValue} readOnly />;
  }
}

export default Display;
