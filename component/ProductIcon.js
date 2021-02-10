import React, { Component } from "react";

import sole from "../public/img/sole.png";
import church from "../public/img/church.png";
import corp from "../public/img/corp.png";
import estate from "../public/img/estate.png";
import nonprofit from "../public/img/nonprofit.png";
import partherships from "../public/img/partherships.png";
import personalservice from "../public/img/personal-service.png";
import scorp from "../public/img/s-corp.png";
import trust from "../public/img/trust.png";
import llc from "../public/img/llc.png";

class ProductIcon extends Component {
  render() {
    let image,
      imgClass = null;
    if (!this.props.code) {
      return <div>loading</div>;
    } else {
      if (this.props.code === "EINSoleProp") image = sole;
      if (this.props.code === "EINLLC") image = llc;
      if (this.props.code === "EINTrust") image = trust;
      if (this.props.code === "EINEstate") {
        image = estate;
        imgClass = "estate";
      }
      if (this.props.code === "EINNonProfit") {
        image = nonprofit;
        imgClass = "nonprofit";
      }
      if (this.props.code === "EINChurch") {
        image = church;
        imgClass = "church";
      }
      if (this.props.code === "EINPartnership") image = partherships;
      if (this.props.code === "EINPSC") {
        image = personalservice;
        imgClass = "personalservice";
      }
      if (this.props.code === "EINCCorp") image = corp;
      if (this.props.code === "EINSCorp") {
        image = scorp;
        imgClass = "scorp";
      }
    }
    return (
      <div className={"round-icon " + imgClass}>
        <img src={image} alt={image} />
      </div>
    );
  }
}

export default ProductIcon;
