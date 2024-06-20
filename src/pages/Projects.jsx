import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/project2.png";
import lift from "../assets/project1.png";
import kickstart from "../assets/project3.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="E-commerce website"
              description="This project is an e-commerce website designed and developed using HTML, CSS, and JavaScript. The website features a clean and modern design, showcasing a variety of footwear products..Through this project, I have gained valuable experience in HTML and CSS, and I have also learned some JavaScript to enhance the interactivity of the site."
              ghLink="https://github.com/Yessine20/projet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Portfolio React"
              description="This project is a personal portfolio website designed and developed using React. The website features a modern and clean design, allowing me to showcase my skills, projects, and experience..Through this project, I have gained valuable experience in React and modern front-end development practices."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Marketing Project"
              description="During my studies at the Higher School of Commerce in Sfax, I completed a marketing project focused on setting targeted and measurable objectives to achieve a defined goal."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

         

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects