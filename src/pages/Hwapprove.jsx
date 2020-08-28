import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Hwapprove = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="welcome">
              <div>
                <h1>HWSETA Approve</h1>
              </div>
              <div className="line"></div>
              <embed
                src="assets/downloadx/e-learning_approval.pdf"
                width="1100px"
                height="800px"
                type="application/pdf"
              ></embed>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hwapprove;
