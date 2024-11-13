import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { certifications } from "./certification";
import { motion } from "framer-motion";
import "./certification.css"
const Certifications = () => {
  return (
    <>
      <Container className="container-xxl">
        <Row>
          <Col>
            <div id="certifications">
              <h1 className="heading_tag mt-5 mb-5">Certifications</h1>
              <Row>
                {certifications.map((data, index) => (
                  <Col
                    className="d-flex justify-content-center mb-5 "
                    lg={3}
                    md={6}
                    sm={12}
                    xs={12}
                    key={index}
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      animate={{
                        transition: { type: "spring", duration: 0.1 },
                      }}
                      className="c-card"
                    >
                      <div className="c-card-details">
                        <p className="c-text-title">{data.course}</p>
                        <p className="c-text-body">{data.institute}</p>
                        <p className="c-text-body">
                          <span>{data.duration.start}</span> -{" "}
                          <span>{data.duration.end}</span>
                        </p>
                      </div>
                      <button className="c-card-button">
                        <a href={data.certification_link} target="_blank">
                          View Certificate
                        </a>
                      </button>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Certifications;
