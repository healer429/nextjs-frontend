import React, { Component } from "react";

class SingleFAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <a
            data-bs-toggle="collapse"
            href={"#collapse" + this.props.count}
            role="button"
            aria-expanded="false"
            aria-controls={"collapse" + this.props.count}
            className="faq-link collapsed"
          >
            {this.props.q}
          </a>
        </p>
        <div className="collapse" id={"collapse" + this.props.count}>
          <p>{this.props.a}</p>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SingleFAQ;
