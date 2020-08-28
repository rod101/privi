import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      {/* <div className="topbanner"> */}
      {/* <div className="wordwrap">
            <h2>We Provide</h2>
            <h1 className="bigtext">e-Learning</h1>
            <h2>For SETAs, QCTO, TVET Colleges, Schools and Universities</h2>
            <Link to="/about">
            <Button variant="primary" size="lg">READ MORE</Button>
            </Link>
            <Link to="/contact">
            <Button variant="outline-light" size="lg">GET IN TOUCH</Button>
            </Link>

            </div> */}
      {/* <img className="img" src="assets/images/top_banner.jpg" alt=""/> */}

      <Carousel>
        <Carousel.Item>
          <div className="image1">
            <div className="wordwrap">
              <h2>We Provide</h2>
              <h1 className="bigtext">e-Learning</h1>
              <h2>For SETAs, QCTO, TVET Colleges, Schools and Universities</h2>
              <Link to="/about">
                <Button variant="primary" size="lg">
                  READ MORE
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-light" size="lg">
                  GET IN TOUCH
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image2">
            <div className="wordwrap">
                <br/><br/>
              <h2 className="bigtext2">HWSETA Approve</h2>
              <Link to="/hwapprove">
                <Button variant="primary" size="lg">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
