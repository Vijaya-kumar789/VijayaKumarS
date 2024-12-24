import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainImg from "../../assets/image/mainImg.svg";
import githubLogo from '../../assets/image/github.png'
import linkedinLogo from '../../assets/image/linkedin.png'
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa6";
import { handleDownload } from "./resumeDownload";
import { motion } from "framer-motion";
import './header.css' 

const Header = () => {
  const contactId = "contact";
  return (
    <>
      <section className="header section">
    <Container className='container-xxl'>
        <Row className = " d-flex">
          <Col lg={6} md={12}  
           className="headContent ">
            <motion.div  initial={{ y: 700 }}
                animate={{ y: 0, transition: { type: "spring" } }}>
                  <h2 className='head1 py-lg-3'>Hi👋, I'm Vijayakumar</h2>
            <p className=''>
              A motivated MERN Stack Developer with a passion for crafting
              innovative and efficient web applications. Having recently
              completed comprehensive training in MongoDB, Express.js, React,
              and Node.js, I’m eager to leverage my skills and contribute to
              exciting projects.
            </p>
            <div className = "h-link my-3 py-3">
            <span><a href="https://github.com/Vijaya-kumar789" target="_blank" >
            <img src={githubLogo} alt="github-Logo" />
            </a>
            </span>
           <span><a href="https://www.linkedin.com/in/vijayakumar-s-298554253/" target="_blank" >
           <img src={linkedinLogo} alt="linkedin-Logo" />
           </a></span> 
            </div>
            {/* <div className="h-button">
               <span><button className="main_btn"><Link to="contact"  smooth={true}
                offset={-100}
                spy={true}
                duration={300}
                >Get in touch</Link></button></span> 
               <span><button className="resume_btn "><Link onClick={handleDownload}>Resume <span><FaDownload /></span></Link></button></span> 
            </div> */}
         <div className="h-button">
      {/* Smooth Scroll to Contact Section */}
      <span>
        {contactId ? (
          <button className="main_btn">
            <Link
              to={contactId} 
              smooth={true}
              offset={-100}
              spy={true}
              duration={300}
            >
              Get in touch
            </Link>
          </button>
        ) : (
          <button className="main_btn" disabled>
            Get in touch
          </button>
        )}
      </span>
      
      {/* Resume Button */}
      <span>
        <button className="resume_btn">
          <Link onClick={handleDownload}>
            Resume <span><FaDownload /></span>
          </Link>
        </button>
      </span>
    </div>
            </motion.div>
            
          </Col>
          <Col
            lg={6} md={12}
            className="d-flex justify-content-center align-items-center "
          >
            <motion.div  initial={{ y: -700 }}
                animate={{ y: 0, transition: { type: "spring" } }}>
            <img src={mainImg} alt="image" className="mainImg" />
              </motion.div>
          </Col>
        </Row>
       
        </Container>
      </section>
    </>
  );
};

export default Header;
