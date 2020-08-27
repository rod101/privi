import React, { Component } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

export class Fbooking extends Component {
  render() {
    return (
      <div>
        <Form action="#">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="fullname"
                  placeholder="Full Name"
                  size="lg"
                  name="fullname"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="company"
                  placeholder="Company Name"
                  size="lg"
                  name="company"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="phone"
                  placeholder="Phone Number"
                  size="lg"
                  name="phone"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="email"
                  placeholder="Email"
                  size="lg"
                  name="email"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Label as="legend" column sm={6}>
              <b>Day:</b>
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                inline
                type="radio"
                label="Wednesday"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                inline
                type="radio"
                label="Friday"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>


          <Form.Group>
            <Form.Label as="legend" column sm={6}>
              <b>Time:</b>
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                inline
                type="radio"
                label="11:00am"
                name="formHorizontalRadios2"
                id="formHorizontalRadios1"
              />
              <Form.Check
                inline
                type="radio"
                label="2:00pm"
                name="formHorizontalRadios2"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
          <Button variant="primary" size="lg" onClick={this.handleSubmit}>
                Submit
              </Button>

              {/* {this.state.mailSent && 
              <div>
                <Alert variant="success">
                Thank you for contcting us.
                </Alert>
                </div>} */}
        </Form>
      </div>
    );
  }
}

export default Fbooking;
