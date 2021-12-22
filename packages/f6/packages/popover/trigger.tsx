import React from "react";

class Trigger extends React.Component {
  render () {
    return (
      <>{this.props.children}</>
    )
  }
}

export default Trigger;