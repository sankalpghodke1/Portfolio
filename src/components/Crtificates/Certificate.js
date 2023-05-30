import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Certificatecard";
import Particle from "../Particle";
import ms1 from "../../Assets/Ceritificate/Screenshot 2023-05-07 004605.png";
import IOT from "../../Assets/Ceritificate/IOT.png";
import ML from "../../Assets/Ceritificate/ML with Python.png";
import Cloud from "../../Assets/Ceritificate/Cloud.png";
import internship1 from "../../Assets/Ceritificate/IMG_20220728_185121.jpg";
import zenser from "../../Assets/Ceritificate/Zensar Certificate.jpg";
import python from "../../Assets/Ceritificate/python spring Board.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Ceritifications </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few Certificates I've completed recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ms1}
                            isBlog={false}
                            title="Microsoft Azure Data Fundamentals"
                            description=""
                            ghLink={ms1}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={IOT}
                            isBlog={false}
                            title="IOT Wireless & Cloud Computing Emerging Technologies"
                            description=""
                            ghLink={IOT}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ML}
                            isBlog={false}
                            title="Machine Learning with Python"
                            description=""
                            ghLink={ML}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Cloud}
                            isBlog={false}
                            title="NPTEL Cloud Computing"
                            description=""
                            ghLink={Cloud}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={zenser}
                            isBlog={false}
                            title="Zensar Technologies"
                            description=""
                            ghLink={zenser}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={python}
                            isBlog={false}
                            title="Programming Fundamentals using Pyhton"
                            description=""
                            ghLink={python}
                        />
                    </Col>



                </Row>

                <p style={{ color: "white" }}>
                    Here are a few internship Certificates that I've completed.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={internship1}
                            isBlog={false}
                            title="GVL Electro Controls Pvt Ltd"
                            description=""
                            ghLink={internship1}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
