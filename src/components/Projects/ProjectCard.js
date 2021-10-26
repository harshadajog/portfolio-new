import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard(props) {
    const { name, description, details, tools, git, link, codepen } = props.data;
    const toolList = tools.map((tool, i) => <div key={i}>{tool}</div>);
    const detailList = details.map((detail, i) => <li key={i}>{detail}</li>);

  return (
    <li className="project">
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
        <ul>
          {detailList}
        </ul>
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
            <div className="project-tools">
            {toolList}
            </div>
        </Card.Text>
        <Card.Link style={{ color: "#c770f0" }}  href={git}>GIT</Card.Link>
        <Card.Link style={{ color: "#c770f0" }} href={link}>LIVE</Card.Link>
        {/* <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> */}
      </Card.Body>
    </Card>

  </li>


    
  );
}
export default ProjectCard;