import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <Container>
        <Row>
          <Col>
            <h3>PRIVI</h3>
            <p>
              We are a diversified team of experienced, qualified, and
              passionate specialists in Information Technology, Training and
              Education and quality assurance
            </p>
          </Col>
          <Col>
            <h3>Services</h3>
            <p>SDS</p>
          </Col>
          <Col>
            <h3>Company</h3>
            <p>About</p>
            <p>Team</p>
            <p>Clients</p>
            <p>Booking</p>
            <p>News</p>
          </Col>
          <Col>
            <h3>Contact</h3>
            <b>Physical address:</b>
            <p>22 Countesses Avenue Windsor West Johannesburg</p>
            <b>Telephone Number:</b>
            <p>+27 62 982 7442</p>
            <p>info@privi.co.za</p>
          </Col>
        </Row>
        <Row></Row>
        <hr />
        <Row>
          <Col>Copyright © techno all rights reserved.</Col>
          <Col className="text-right">
            Terms & Condition | Privacy Policy | Contact Us
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
