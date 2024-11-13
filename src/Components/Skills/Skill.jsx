import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { frontEndIcons,dataBaseIcons,backEndIcons,toolsIcons } from "./skill";

const Skill = () => {
  return (
    <>
      <Container className="container-xxl">
        <Row>
          <Col>
            <div id="skills">
              <h1 className="heading_tag mt-5 mb-4">Skills</h1>
              <Row>
                <Col lg={6} md={6}>
                  <h4 className="mb-3">Technology I've worked with :)</h4>
                  <div className="mb-3 ">
                    With a strong focus on continuous improvement, I
                    consistently expand my knowledge of modern frameworks and
                    libraries to build innovative, high-performance web
                    applications.
                  </div>
                  <div>
                    My passion for learning and my problem-solving skills enable
                    me to tackle challenges head-on and deliver scalable
                    solutions that meet both user and business needs.
                  </div>
                </Col>
                <Col lg={6} md={6} className="skill">
                  <h4>FrontEnd</h4>
                  <div className="d-flex flex-wrap">
                    {frontEndIcons.map((item, index) => (
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                            },
                          },
                          hidden: { opacity: 1, y: 80 },
                        }}
                        key={index}
                        className="icons "
                      >
                        <motion.div
                          initial="hidden"
                          whileInView={"visible"}
                          variants={{
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                              },
                            },
                            hidden: { opacity: 1, y: 80 },
                          }}
                        >
                          <img src={item.icon} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <h4>BackEnd</h4>
                  <motion.div className="d-flex flex-wrap">
                    {backEndIcons.map((item, index) => (
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                            },
                          },
                          hidden: { opacity: 1, y: 80 },
                        }}
                        key={index}
                        className="icons "
                      >
                        <motion.div
                          initial="hidden"
                          whileInView={"visible"}
                          variants={{
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                              },
                            },
                            hidden: { opacity: 1, y: 80 },
                          }}
                        >
                          <img src={item.icon} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <h4>DataBase</h4>
                  <div className="d-flex flex-wrap">
                    {dataBaseIcons.map((item, index) => (
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                            },
                          },
                          hidden: { opacity: 1, y: 80 },
                        }}
                        key={index}
                        className="icons "
                      >
                        <motion.div
                          initial="hidden"
                          whileInView={"visible"}
                          variants={{
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                              },
                            },
                            hidden: { opacity: 1, y: 80 },
                          }}
                        >
                          <img src={item.icon} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <h4>Tools</h4>
                  <div className="d-flex flex-wrap">
                    {toolsIcons.map((item, index) => (
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                            },
                          },
                          hidden: { opacity: 1, y: 80 },
                        }}
                        key={index}
                        className="icons "
                      >
                        <motion.div
                          initial="hidden"
                          whileInView={"visible"}
                          variants={{
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                              },
                            },
                            hidden: { opacity: 1, y: 80 },
                          }}
                        >
                          <img src={item.icon} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
