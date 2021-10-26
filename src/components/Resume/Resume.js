import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../resources/Particle";
import pdf from "../../resources/HarshadaJog.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
          <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button variant="primary" href={pdf} target="_blank" style={{width: "10.0rem"}}>
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
    
            {/* <Row className="resume">
              <Document file={pdf}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row> */}
    
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button variant="primary" href={pdf} target="_blank" style={{width: "10.0rem"}}>
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Container>
        </div>
      );
}

export default Resume;