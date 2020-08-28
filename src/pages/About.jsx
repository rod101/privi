import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
    <Container>
      <Row className="topspacing">
        <Col>
        <div className="welcome">
        <div>
            <h1>We are PRIVI</h1>
          </div>
          <div className="line"></div>
          <div>
            <p>
              We are a diversified team of experienced, qualified, and
              passionate specialists in Information Technology, Training and
              Education and quality assurance
            </p>
            <p>
              We are an integrated information technology company that
              specialises in developing cutting edge and customised training,
              teaching, and learning software and platforms.
            </p>
            <p>
              Our e-learning systems are customised to our south African
              outcome-based learning and are aligned to Sector Education and
              Training Authorities (SETAs) and the Quality Council for Trades
              and Occupations (QCTO)
            </p>
            <p>We are passionate about education and training</p>
            <p>
              We believe in effective lifelong learning and we have developed
              e-learning systems that enhance learning even during the lockdown
              due to the COVID19 pandemic
            </p>
          </div>
        </div>
          
        </Col>
        <Col>
          <img
            className="aboutimg"
            src="assets/images/about_us.jpg"
            alt="about us"
          />
        </Col>
      </Row>
      </Container>



      <Row>
            <Col>
            <div className="aboutbg1">
            <h1>Our Mission</h1>
          <div className="line2"></div>
          <p>
            To enable effective training, teaching, and learning anywhere by
            anyone in the whole country, regardless of geographical location or
            economic circumstances
          </p>

          <h1>Our Vision</h1>
          <div className="line2"></div>
          <p>
            To continue leading the development of customised training,
            teaching, and learning software and platforms
        </p>
                
            </div>
            </Col>
        </Row>


<Container>


      <Row className="topspacing">
        <Col>
          <img src="assets/images/girl_watching.jpg" alt="" />
          </Col>
        <Col>
        <div className="welcome">
          <h1> Our Values</h1>
          <div className="line"></div>
          <p>
        </p>
       <ul>
           <li>Professionalism: delivering as per our promise (quality, quantity and duration)</li>
           <li>Customer Service: Exceeding client and customer needs and expectations</li>
           <li>Value for money: we go an extra mile to ensure that our clients get quality service within record time</li>
           <li>Integrity: Our services will meet the required standards by any stakeholder (SETA ETQAs)</li>
           <li>Integration: we believe in synergy and working together to achieve more and better results</li>
       </ul>
       </div>
        </Col>
      </Row>
      <Row className="topspacing">
          <Col>
        <h1> Our Belief</h1>
          <div className="line"></div>
<p>One size does not fit all</p>
          </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
