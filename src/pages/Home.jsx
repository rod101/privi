import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <div className="textcenter">
          <h1 className="topspaceing">WHO WE ARE</h1>
          <p>
            We are a diversified team of experienced, qualified, and passionate
            specialists in Information Technology, Training and Education and
            quality assurance
          </p>
          <p>
            Our e-learning systems are customised to our south African
            outcome-based learning and are aligned to Sector Education and
            Training Authorities (SETAs) and the Quality Council for Trades and
            Occupations (QCTO)
          </p>
          <h1 className="topspaceing">WHAT WE OFFER</h1>
        </div>
        <div>
          <Row>
            <Col className="topleft">
              <img className="iconsize" src="assets/images/study.svg" alt="" />
              <h5>Virtual Library</h5>
              <p>Learning materials, study guides, audios and videos.</p>
            </Col>
            <Col className="centre">
              <img
                className="iconsize"
                src="assets/images/provider.svg"
                alt=""
              />
              <h5>Learning technology and software</h5>
              <p>
                our software feature include Institution Administration,
                financial management, Facilitation, Assessment, Moderation, etc
              </p>
            </Col>
            <Col className="topright">
              <img
                className="iconsize"
                src="assets/images/animation.svg"
                alt=""
              />
              <h5>Video & Animation</h5>
              <p>
                Animated video can be a powerful way to convey a concept and
                engage your learners.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="bottomleft">
              <img
                className="iconsize"
                src="assets/images/strategy.svg"
                alt=""
              />
              <h5>e-Learning content development</h5>
              <p>
                We can provide stunning examples of elearning content that have
                developed.
              </p>
            </Col>
            <Col className="centre">
              <img
                className="iconsize"
                src="assets/images/teacher.svg"
                alt=""
              />
              <h5>Live Classes & Facilitation</h5>
              <p>
                SDPs are able to conduct live classes at anytime to all their
                learners
              </p>
            </Col>
            <Col className="bottomright">
              <img
                className="iconsize"
                src="assets/images/training.svg"
                alt=""
              />
              <h5>Teaching & Learning Aids</h5>
              <p>
                Our SDS software is compatible with Zoom, MS Teams, Moodle etc
              </p>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      </Container>
      <div className="sdswrap">
        <Container>
          <Row>
            <Col lg="4">
              <h2>SDS - Skills Development System</h2>
              <p>
                <b>Holistic:</b> The SDS has been developed to provide holistic
                training and quality assurance capabilities to SETAs, the QCTO
                and Skills Development Providers (SDPs) “training Institutions”
              </p>
              <p>
                <b>SDS Feature:</b> Institution Administration, financial
                management, Facilitation, Assessment, Moderation, ETQA Quality
                Assurance and Monitoring and Evaluation
              </p>
              <Link to="/product">
              <Button variant="light" size="lg">
                See it for Yourself
              </Button>
              </Link>
            </Col>
            <Col>
              <img className="sdsimg" src="assets/images/sds.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bar">
        <Container>
        <span>
          <h3>
            We Build Relationships, Ready for the LMS You Need?
            <Button variant="primary" size="lg">
              See it for Yourself
            </Button>
          </h3>
        </span>
        </Container>
      </div>
    </div>
  );
};

export default Home;
