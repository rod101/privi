import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Fcontact from "../components/Fcontact";

const Contact = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>Contact</h1>
          <div className="line"></div>
          <Row>
            <Col>
              <div className="boxx">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  PRIVI Technologies Physical address: 22 Countesses Avenue
                  Windsor West Johannesburg
                </p>
              </div>
            </Col>
            <Col>
              <div className="boxx">
                <i className="fas fa-file-signature"></i>
                <p>
                  Telephone Number:
                  <a href="tel:+27738528719">+27 73 852 8719</a>
                </p>
                <p>Facsimile Number: 086 666 9756</p>
              </div>
            </Col>
            <Col>
              <div className="boxx">
                <i className="fas fa-at"></i>
                <p>Email: sds@privi.co.za</p>
              </div>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      </Container>
      <div>
        <Container>
          <Fcontact />
        </Container>
      </div>
      <br />
      <br />
      <br />
      <div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.2322311234743!2d27.96567131502842!3d-26.123969983473728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95752bb8e5755b%3A0xf0c488a94159bebb!2s22%20Countesses%20Ave%2C%20Windsor%20West%2C%20Randburg%2C%202194!5e0!3m2!1sen!2sza!4v1594212704215!5m2!1sen!2sza" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
      </div>
    </div>
  );
};

export default Contact;
