import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Fcontact.css";
import axios from "axios";

const API_PATH = "http://privi.co.za/services/sendmail.php";

export class Fcontact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: "Start a Project",
      email: "",
      company: "",
      fname: "",
      phone: "",
      location: "",
      contact: "How did you hear about us?",
      comment: "",
      mailSent: false,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForms = () => {
    this.setState({
      email: "",
      company: "",
    });
  };

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });

    console.log("is checked " + e.target.name);
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log("sending form", this.state);
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
    console.log(
      "that is the messages am sending that i cant see",
      this.props.mailSent
    );
    alert("here is a message", this.mailSent);
    this.clearForms();
  }

  render() {
    return (
      <div>
        <Row className="contactbox">
          <Col>
            <div className="left">
              <img
                className="contactimg"
                src="assets/images/women-and-man.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <h1>Get In Touch</h1>
            <div className="line"></div>
            <Form action="#">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                  as="select"
                  size="lg"
                  name="project"
                  onChange={this.handleChange}
                >
                  <option>Start a Project</option>
                  <option>Schedule a speaking engagement</option>
                  <option>General inquiries</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="Email"
                      size="lg"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
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
                      placeholder="Full Name"
                      size="lg"
                      name="fname"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Phone Number"
                      size="lg"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="Location"
                      size="lg"
                      name="location"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control
                        placeholder="Location"
                        as="select"
                        size="lg"
                        name="contact"
                        onChange={this.handleChange}
                      >
                        <option>How did you hear about us?</option>
                        <option>Search Engine</option>
                        <option>Social Media</option>
                        <option>Referrals / Recommendations</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                  as="textarea"
                  rows="3"
                  size="lg"
                  placeholder="Tell us about your project needs and budget"
                  name="comment"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" size="lg" onClick={this.handleSubmit}>
                Submit
              </Button>

              {this.state.mailSent && <div>Thank you for contcting us.</div>}
            </Form>
          </Col>
          <div></div>
        </Row>
      </div>
    );
  }
}

export default Fcontact;
