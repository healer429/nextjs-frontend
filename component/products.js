import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/productActions";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import ProductIcon from "./ProductIcon";
import { Link } from "react-router-dom";

class products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;

    return (
      <Container fluid className="products">
        {products.map((u) => (
          <React.Fragment key={u.code.replace("_", "")}>
            <OverlayTrigger
              placement="right"
              key={u.code.replace("_", "")}
              delay={{ show: 0, hide: 0 }}
              overlay={
                <Tooltip id={`tooltip-${u.customerName}`}>
                  <strong>{u.customerName}</strong>
                  <br />
                  {u.code.replace("_", "") === "EINSoleProp"
                    ? "A sole proprietor is someone who owns an unincorporated business by himself or herself."
                    : ""}
                  {u.code.replace("_", "") === "EINPartnership"
                    ? "A partnership is an arrangement between two or more individuals to create and manage a business. There are many types of partnerships, run in a variety of ways."
                    : ""}
                  {u.code.replace("_", "") === "EINCCorp"
                    ? "A corporation is popular as it offers liability protection, as well as separates the business owner and business as taxable entities."
                    : ""}
                  {u.code.replace("_", "") === "EINLLC"
                    ? "LLCs are the most common business entity in the U.S., offering flexibility, limited liability protection, and taxation advantages."
                    : ""}
                  {u.code.replace("_", "") === "EINSCorp"
                    ? "A type of corporation that draws its name from Subsection S of the tax code. It has all the features of a corporation, but also functions as a pass-through entity for taxation purposes."
                    : ""}
                  {u.code.replace("_", "") === "EINTrust"
                    ? "A type of legal entity in which an individual can place their assets so that they can be passed down to beneficiaries in the future."
                    : ""}
                  {u.code.replace("_", "") === "EINEstate"
                    ? "An estate is the sum of any assets left by a deceased individual. That includes things like property, vehicles, and valuables. The will of said individual will determine the administrator of their estate."
                    : ""}
                  {u.code.replace("_", "") === "EINPSC"
                    ? "A PSC is a subset of corporations that provides services specifically to individuals. These can include professions like healthcare, law, finance, and more."
                    : ""}
                  {u.code.replace("_", "") === "EINNonProfit"
                    ? "This entity is used by charities who donate their revenue to a specific goal or cause with the goal of benefiting the public instead of generating profit."
                    : ""}
                  {u.code.replace("_", "") === "EINChurch"
                    ? "A form of nonprofit that is specifically for religious organizations. And though it is called a “church organization,” it also includes places of worship such as mosques, temples, and synagogues."
                    : ""}
                </Tooltip>
              }
            >
              <Link
                to={"/products/" + u.code.replace("_", "")}
                className={
                  u.code.replace("_", "") === "EINSoleProp" ||
                  u.code.replace("_", "") === "EINLLC"
                    ? "popular"
                    : ""
                }
              >
                <div className="product">
                  <ProductIcon code={u.code.replace("_", "")} />
                  <span>{u.customerName}</span>
                </div>
              </Link>
            </OverlayTrigger>
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { getProducts })(products);
