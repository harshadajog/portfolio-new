import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../resources/Particle";
import GithubActivity from "./GithubActivity";
// import Techstack from "./Techstack";
import Details from "./Details";
import aboutImg from "../../assets/about.png";
// import Toolstack from "./Toolstack";
import '../../App.css';
import './About.style.css';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col className="details"
            md={7}
            // style={{
            //   justifyContent: "center",
            //   paddingTop: "30px",
            //   paddingBottom: "50px",
            // }}
          >
            <Details />
          </Col>
          <Col
            md={5}
            // style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        {/* <Techstack /> */}

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        {/* <Toolstack /> */}

        <GithubActivity />
      </Container>
    </Container>
  );
}

export default About;
