import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sdsapplicationform.css";

const Sdsapplicationform = () => {
  return (
    <Container>
      <Row >
        <Col>
        <div className="welcome">
        <div>
            <h1>SDS APPLICATION FORM</h1>
          </div>
          <div className="line"></div>
          <embed src="assets/downloadx/SDS_e-learning_pamphlet.pdf" width="1100px" height="800px" 
 type="application/pdf"></embed>

 <a href="assets/downloadx/SDS_e-learning_pamphlet.pdf"> Download Here</a>
 

        </div>
          
        </Col>
       
      </Row>
    </Container>
  );
};

export default Sdsapplicationform;
