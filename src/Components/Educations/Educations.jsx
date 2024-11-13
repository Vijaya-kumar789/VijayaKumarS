import React from 'react'
import {Container, Row, Col } from "react-bootstrap";
import './education.css'
import { educationInfo } from './education';

const Educations = () => {
  return (
    <>
     <Container className='container-xxl'>
      <Row>
        <Col lg={6}>
        <div id="education">
      <h1 className="heading_tag mt-5 mb-4" >Educations</h1> 
     {
      educationInfo.map((data,index)=>(
<div className="e-card-container" key={index}>
    <div className="e-card-line">
      <div className="e-card-dot"></div>
    </div>
    <div className="e-card-text">
      <h4>{data.name}</h4>
      <p>{data.courseName}</p>
      <p>{data.duration}</p>
    </div>
  </div>
      ))
     }
        
    </div>
        </Col>
        </Row>
        </Container>
    </>
  
  )
}

export default Educations