import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      item: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://app.fakejson.com/q/6ip713p8?token=vizsQZmUWAhHhJxA7gBZvQ")
      .then(json => {
        this.setState({ item: json.data });
      });
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Show` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src={this.state.item.thumb}
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    <strong>{this.state.item.name}</strong>
                  </p>
                  <p>{this.state.item.description}</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
