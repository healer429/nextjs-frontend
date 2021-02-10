import React, { Component } from "react";

const _withFormWrapper = (WrappedComponent) =>
  class Wrapper extends Component {
    render() {
      return (
        <div className="box">
          <WrappedComponent />
        </div>
      );
    }
  };

export default _withFormWrapper;
