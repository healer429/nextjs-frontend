import React, {Component} from "react";

class CustomLabel extends Component {
    render() {
        return (
           <div className="custom-label">
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <div className="price">${this.props.price}</div>
        </div>
        )
    }
}

export default CustomLabel;