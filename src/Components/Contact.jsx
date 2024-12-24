import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import githubLogo from "../assets/image/github.png";
import linkedinLogo from "../assets/image/linkedin.png";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { SERVICE_ID,TEMPLATE_ID, PUBLIC_KEY } from "../../utils/config";
import { motion } from "framer-motion"

const Contact = () => {

  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        values,
        PUBLIC_KEY,
      );
      alert("Message sent successfully!");
      actions.resetForm()
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange,errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit,
  });
  return (
    <>
      <Container className="container-xxl">
        <Row>
          <Col>
            <div id="contact">
              <h1 className="heading_tag mt-5 mb-4">Contact</h1>
              <p className="fs-6">
                Feel free to fill the form down below, or contact me directly by
                email
              </p>
            </div>
            <motion.div initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          hidden: { opacity: 0, x: -300 },
        }}>
            <Row className="mb-4"  >
              <Col   lg={6}>
                <form
                  onSubmit={handleSubmit}
                  className="pe-5 fs-5 fw-bolder d-flex flex-column  contact-form"
                >
                  <div className="mb-3 ">
                    <label htmlFor="name" className="form-label ">
                      Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      required
                      id="name"
                      onChange={ handleChange}
                      value={values.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control py-2"
                      required
                      id="email"
                      onChange={ handleChange}
                      aria-describedby="emailHelp"
                      value={values.email}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message <span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      value={values.message}
                      className="form-control py-3"
                      required
                      onChange={handleChange}
                      
                    />
                  </div>
                  <button type="submit" className="btn ">
                    Submit
                  </button>
                </form>
              </Col>
              <Col lg={6}  className="">
                <div className=" d-flex flex-column align-items-end contact-info">
                  <p className="h3  ">Email</p>
                  <p className=" mb-4">vijaykumaryoyo8@gmail.com</p>
                  
                  <p className="h3 d-flex justify-content-end">
                    Address
                  </p>
                  <p className=" mb-4">Bangalore, India</p>
                  <p className="h3 d-flex justify-content-end">
                    Phone
                  </p>
                  <p className=" mb-4">+91 7892005352</p>
                  <p className="h3 ">Social</p>
                  <div style={{ marginRight: "0px" }} className="">
                    <span>
                      <a
                        href="https://github.com/Vijaya-kumar789"
                        target="_blank"
                      >
                        <img
                          style={{ width: "50px" }}
                          src={githubLogo}
                          alt="github-Logo"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/vijayakumar-s-298554253/"
                        target="_blank"
                      >
                        <img
                          style={{ width: "50px" }}
                          src={linkedinLogo}
                          alt="linkedin-Logo"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
