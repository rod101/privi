import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>The Skills Development System (SDS)</h1>
            <div className="line"></div>
            <p>
              <b>Holistic: </b>The SDS has been developed to provide holistic training
              and quality assurance capabilities to SETAs, the QCTO and Skills
              Development Providers (SDPs) “training Institutions”
            </p>
            <p>
              <b>Customised:</b> As per our belief, the SDS NOT a generic “off the
              shelf” system that many have been forced to use, but it is a
              customised solution to the SETA/QCTO environment.
            </p>
            <p>
              <b>SDS Feature:</b> Institution Administration, financial management,
              Facilitation, Assessment, Moderation, ETQA Quality Assurance and
              Monitoring and Evaluation
            </p>
            <p>
              <b>Integration:</b> The SDS is compatible and can be integrated with any
              learner Management system that may be in place, whether at SDP,
              SETA or QCTO level, you will not need to “do the work twice”
            </p>
            <p>
              <b>Teaching & Learning Aids:</b> the SDS is compatible with Zoom, MS
              Teams, Moodle etc
            </p>
            <p>
              <b>Realtime:</b> The SDS offers real-time updating of learner
              information, attendance, assessment and achievements, financials.
            </p>
            <p>
              <b>Virtual Library:</b> The SDS comes with virtual library, SDPs are able
              to upload learning materials, study guides, audios and videos.
            </p>
            <p>
              <b>Live Classes & Facilitation:</b> SDPs are able to conduct live classes
              at anytime to all their learners
            </p>
            <Row>
                <Col> 
                <img className="prodicon" src="assets/images/video.svg" alt=""/> Live Classes
                </Col>
                <Col> 
                <img className="prodicon" src="assets/images/algorithm.svg" alt=""/>  Integration
                </Col>
            </Row>
            <Row>
                <Col> 
                <img className="prodicon" src="assets/images/desktop.svg" alt=""/> Virtual Library
                </Col>
                <Col> 
                <img className="prodicon" src="assets/images/time.svg" alt=""/> Realtime
                </Col>
            </Row>
          </Col>
          <Col>
          <img className="sdsimg2" src="assets/images/sds.png" alt=""/>
          </Col>
        </Row>

      </Container>
        <Row>
            <Col>
            <div className="prodcta">
                <p>The SDS is compatible and can be integrated with any learner Management system that may be in place.</p>
                <h3>SETAs, QCTO, TVET Colleges, Schools and Universities</h3>
                <Button size="lg">Watch Demo</Button> <Button size="lg">Book for a Demo</Button>
            </div>
            </Col>
        </Row>
    </div>
  );
};
export default Products;
