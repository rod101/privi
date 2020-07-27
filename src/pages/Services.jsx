import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <div className="line"></div>
      <p>
        1. Free SDS Training Sessions: We offer virtual training sessions to all
        our clients and customers. Sessions are held on Wednesdays and Fridays.
      </p>
      <p>
        2. COVID-19 Compliant Induction Session We have developed a COVID-19
        Compliant Induction Session that is available to all our clients and
        customers, this is available on request, at no cost.
      </p>
      <p>
        3.Integration of Systems We offer assistance with integration of the SDS
        with our clients and customers' existing systems for seamless provision
        of education and training services (Ts & Cs apply)
      </p>
      <p>
        4. Support and maintenance We offer around the clock support and
        maintenance to all your clients and customers.
      </p>
      <img className="ladyimg" src="assets/images/lady_learning.jpg" alt=""/>
    </Container>
  );
};

export default Services;
