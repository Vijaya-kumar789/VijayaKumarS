import React from "react";
import { Container,Row, Col } from "react-bootstrap";


const About = () => {
  return (
    <section id="about" className="section">
     <Container className='container-xxl'>
      <Row>
        <Col>
        <h1 className="heading_tag mt-5 mb-4">About me</h1>
      <p className="fs-6">
        Currently, Completed a comprehensive MERN stack course at Guvi, where I
        developed a deep understanding of both front-end and back-end
        technologies, with where I gained hands-on
        experience with MongoDB, Express.js, React, and Node.js. My training has
        equipped me with the skills needed to build dynamic, end-to-end web
        applications, and I’m excited to apply this knowledge to real-world
        projects. Scroll down to see some of the projects I've been working on.
      </p>
        </Col>
      </Row>
     </Container>
      
      
    </section>
  );
};

export default About;
