import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export class Fsdsform extends Component {
  render() {
    return (
      <div>
        <Form action="#">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="namesds"
                  placeholder="Name of SDS"
                  size="lg"
                  name="namesds"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="contact"
                  placeholder="Contact Details"
                  size="lg"
                  name="contact"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="phyaddress"
                  placeholder="SDP Physical Address"
                  size="lg"
                  name="phyaddress"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="Coordinates"
                  placeholder="SDP Coordinates"
                  size="lg"
                  name="Coordinates"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="sdpperson"
                  placeholder="SDP Contact Person"
                  size="lg"
                  name="sdpperson"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="phyaddress"
                  placeholder="SDP Telephone Number 1"
                  size="lg"
                  name="phyaddress"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="Coordinates"
                  placeholder="SDP Telephone Number 2"
                  size="lg"
                  name="Coordinates"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="sdpperson"
                  placeholder="SDP Email Address"
                  size="lg"
                  name="sdpperson"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="namesds"
                  placeholder="SDP Primary SETA"
                  size="lg"
                  name="namesds"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="contact"
                  placeholder="SDP Primary SETA Accreditation number"
                  size="lg"
                  name="contact"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

         <p><b>Primary SETA Accredited Programmes</b></p>

         <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>


            <Form.Row>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="saqaid1"
                  placeholder="SAQA ID Number"
                  size="lg"
                  name="saqaid1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="3" >
                <Form.Control
                  ref="nqflevel1"
                  placeholder="NQF Level"
                  size="lg"
                  name="nqflevel1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Control
                  ref="progtitle1"
                  placeholder="Programme Title"
                  size="lg"
                  name="progtitle1"
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Form.Row>
<hr/>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Row>
              <Col>
                <Form.Control
                  ref="namesds"
                  placeholder="SDP Primary SETA"
                  size="lg"
                  name="namesds"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  ref="contact"
                  placeholder="SDP Primary SETA Accreditation number"
                  size="lg"
                  name="contact"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

         <p><b>Primary SETA Accredited Programmes</b></p>



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

export default Fsdsform;
