import React from "react";
import { SiGithub } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { FaServer } from "react-icons/fa";
import { Container, Col, Row } from "react-bootstrap";
import { projectsInfo } from "./project";
import { motion } from "framer-motion";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <Container className="container-xxl">
        <Row>
          <Col>
            <div id="projects">
              <h1 className="heading_tag mt-5 mb-4">Projects</h1>
              <p className="fs-6">
                While I am at the start of my professional journey, I have
                completed several projects during my training that showcase my
                ability to build functional and well-designed web aplications:
              </p>
              <Row className="projects g-4 my-4 ">
                {projectsInfo.map((data, index) => (
                  <Col
                    className=" d-flex justify-content-evenly pb-5"
                    lg={6}
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
                      className="p-cardBox"
                    >
                      <div className="p-card">
                        <div className="p-img ">
                          <img src={data.img} alt="" />
                        </div>

                        <div className="h4">{data.name}</div>
                        <p className="mb-0">{data.purpose}</p>
                        <div className="p-content">
                          <div className="stack mb-3 text-center">
                            {data.stack?.map((item, index) => (
                              <img
                                src={item}
                                alt=""
                                key={index}
                                className="bg-white p-1 m-1 rounded"
                              />
                            ))}
                          </div>
                          <div className="h3 d-flex flex-row justify-content-center align-items-center">
                            {data.links.client ? (
                              <div className="link-btn">
                                <a
                                  target="_blank"
                                  href={data.links.client}
                                  className="link-icon"
                                >
                                  <SiGithub />
                                  <div className="options">
                                    <span>Client code</span>
                                  </div>
                                </a>
                              </div>
                            ) : null}

                            {data.links.live ? (
                              <div className="link-btn">
                                <a
                                  target="_blank"
                                  href={data.links.live}
                                  className="link-icon"
                                >
                                  <HiLink />
                                  <div className="options">
                                    <span>Live</span>
                                  </div>
                                </a>
                              </div>
                            ) : null}

                            {data.links.server ? (
                              <div className="link-btn">
                                <a
                                  target="_blank"
                                  href={data.links.server}
                                  className="link-icon"
                                >
                                  <FaServer />
                                  <div className="options">
                                    <span>Server code</span>
                                  </div>
                                </a>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
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

export default Projects;
