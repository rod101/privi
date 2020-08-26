import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <div className="line"></div>

      <Row>
        <Col>
          <p>
            Free SDS Training Sessions: We offer virtual training sessions to
            all our clients and customers. Sessions are held on Wednesdays and
            Fridays.
          </p>
        </Col>

        <Col>
        <p>
        Support and maintenance We offer around the clock support and
        maintenance to all your clients and customers.
      </p>
        
        </Col>
      </Row>

      <Row>
        <Col>
        <p>
        Integration of Systems We offer assistance with integration of the SDS
        with our clients and customers' existing systems for seamless provision
        of education and training services (Ts & Cs apply)
      </p>
        </Col>
        <Col>
        <p>
            COVID-19 Compliant Induction Session We have developed a COVID-19
            Compliant Induction Session that is available to all our clients and
            customers, this is available on request, at no cost.
          </p>
        </Col>
        </Row>

        <Row>
          <Col>
          <b>Technical Services</b>
          <ul>
            <li>Cabling (UTP, STP, for server rooms)</li>
            <li>Virtualization</li>
           

           <ul>
            <li>Server room Racks and Cabling</li>
            <li>Access Control</li>
            <li>Desktops, Servers, Printers and all IT related products </li>
            <li>Switches, Routers, Firewalls, Wireless products</li>
            <li>Various Software’s and Operating Systems</li>
            </ul>
            
          </ul>

          </Col>
        </Row>
      
      
      <img className="ladyimg" src="assets/images/lady_learning.jpg" alt="" />
    </Container>
  );
};

export default Services;
