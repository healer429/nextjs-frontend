import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import Month from "./Month";
import Day from "./Day";
import Year from "./Year";

class Dates extends Component {
    render() {
        return (
            <div className="dates">
                {this.props.closingMonth ? <h5>Dates</h5> : null }
                <p className="form-group">{this.props.label}</p>
                <Form.Row>
                    <Form.Group as={Col} controlId={this.props.id + "Month"}>
                        <Month defaultValue={this.props.month} onChange={this.props.onChange}/>
                    </Form.Group>
                    <Day controlId={this.props.id + "Day"} defaultValue={this.props.day}
                         onChange={this.props.onChange}/>
                    <Year controlId={this.props.id + "Year"} defaultValue={this.props.year}
                          onChange={this.props.onChange}/>
                </Form.Row>
                {this.props.closingMonth ?
                    <Form.Group controlId="closingMonth">
                        <Form.Label>Closing month of accounting year</Form.Label>
                        <Month defaultValue={this.props.closingMonth} onChange={this.props.onChange}/>
                    </Form.Group> : null}
            </div>
        )
    }

}

export default Dates;