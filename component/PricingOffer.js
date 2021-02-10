import React, { Component } from "react";

class PricingOffer extends Component {
  render() {
    let bullets = this.props.bullets.map((bullet) => (
      <li key={bullet.toString()}>{bullet}</li>
    ));
    return (
      <div className={this.props.selected ? "box-offer selected" : "box-offer"}>
        <div className="header">
          <h6>{this.props.title}</h6>
        </div>
        <div className="copy">
          <div className="price-wrapper">
            <p>{this.props.descr}</p>
            <div className="price">
              <span>$</span>
              <p>{this.props.price}</p>
            </div>
          </div>
          <ul>{bullets}</ul>
        </div>
      </div>
    );
  }
}

export default PricingOffer;
