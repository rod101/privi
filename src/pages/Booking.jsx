import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Booking.css";
import Fbooking from "../components/Fbooking";

export class Booking extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <h1>Book for a Demo</h1>
            <div className="line"></div>
            <Fbooking />
          </div>
        </Container>
      </div>
    );
  }
}

export default Booking;
