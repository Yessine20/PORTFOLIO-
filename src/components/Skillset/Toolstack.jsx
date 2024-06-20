import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiSublimetext,
  SiGnubash
  

} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
