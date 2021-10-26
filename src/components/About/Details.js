import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import '../../App.css';

function Details() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Harshada Jog </span>
            from <span className="purple"> San Jose, California</span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning about UX Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs on Medium
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Success is waking up every day and doing what you want to do"
          </p>
          <br />
          <footer className="blockquote-footer">Daymond John</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Details;
