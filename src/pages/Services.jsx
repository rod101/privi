import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Container>
        <h1>Services</h1>
        <div className="line"></div>

        <Row>
          <Col>
            <img className="prodicon" src="assets/images/user.svg" alt="" />
            <p>
              Free SDS Training Sessions: We offer virtual training sessions to
              all our clients and customers. Sessions are held on Wednesdays and
              Fridays.
            </p>
          </Col>

          <Col>
            <img className="prodicon" src="assets/images/support.svg" alt="" />
            <p>
              Support and maintenance We offer around the clock support and
              maintenance to all your clients and customers.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <img className="prodicon" src="assets/images/integration.svg" alt="" />
            <p>
              Integration of Systems We offer assistance with integration of the
              SDS with our clients and customers' existing systems for seamless
              provision of education and training services (Ts & Cs apply)
            </p>
          </Col>
          <Col>
            <img className="prodicon" src="assets/images/virus.svg" alt="" />
            <p>
              COVID-19 Compliant Induction Session We have developed a COVID-19
              Compliant Induction Session that is available to all our clients
              and customers, this is available on request, at no cost.
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
                <li>
                  Desktops, Servers, Printers and all IT related products{" "}
                </li>
                <li>Switches, Routers, Firewalls, Wireless products</li>
                <li>Various Software’s and Operating Systems</li>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="parallax_home slogan">
        <div className="myoverlay">
          <br/><br/>
          <h1>What We offer</h1>
          <br/><br/>
        <Container>
          <Row className="mycard">
            <Col>
              <Card>
                <Card.Body>
                <img className="prodicon" src="assets/images/desktop.svg" alt=""/>
                  <Card.Title>Virtual Library</Card.Title>
                  <Card.Text>
                  <p>Learning materials, study guides, audios and videos.</p>
                  <br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                <img className="prodicon" src="assets/images/video.svg" alt=""/> 
                  <Card.Title>Video & Animation </Card.Title>
                  <Card.Text>
                  <p>Animated video can be a powerful way to convey a concept and engage your learners.</p>
                  
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                <img className="prodicon" src="assets/images/strategy.svg" alt=""/> 
                  <Card.Title>e-Learning content development</Card.Title>
                  <Card.Text>
                 <p> We can provide stunning examples of e-learning content that we have developed.</p>
                 <br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  );
};

export default Services;
