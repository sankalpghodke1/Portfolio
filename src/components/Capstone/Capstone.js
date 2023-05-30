import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CapstoneCard";
import Particle from "../Particle";
import i1 from "../../Assets/IoT-App-Development-Platforms.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Blogs </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few Blogs I've written recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={i1}
                            isBlog={false}
                            title="Blogs on IOT"
                            description="The Internet of Things is a rapidly evolving technology that is changing the way we 
                            interact with the world around us. It is a network of interconnected devices and sensors that 
                            can collect and transmit data over the internet, enabling new possibilities for automation, 
                            optimization, and innovation. In recent years, IoT has become increasingly pervasive, with 
                            applications in fields ranging from healthcare and transportation to agriculture and 
                            manufacturing."
                            ghLink='https://medium.com/@ghodkesankalp'
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
