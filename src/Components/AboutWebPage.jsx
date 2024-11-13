import React from 'react'
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Container,Row ,Col} from 'react-bootstrap'


const AboutWebPage = () => {
  return (
    <section>
      <Container className='container-xxl'>
      <Row>
        <Col>
        <h1 className="heading_tag mt-5 mb-4">About this website</h1>
        <p className="fs-5"> 
        In case you're wondering how this site was built, you can check source code in github, but here's a quick overview of how things are done.
        </p>
        <ul className="fs-5 mx-4 mt-4 ">
        
            <li>Framework:<span className="fs-5 links" ><Link to="https://react.dev/">React Js</Link></span><span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></li>
            <li>Deployment: <span className="fs-5"><Link to="https://www.netlify.com/">Netlify</Link></span> <span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></li>
            <li>Language:<span className="fs-5"><Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link></span> <span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></li>
            <li>Styling:<span className="fs-5"><Link to="https://getbootstrap.com/">Bootstrap</Link></span><span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></li>
            <li>Animations:<span className="fs-5"><Link to=""> ss</Link></span><span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></li>
        </ul>
        <p  className="fs-6">There are also other dependencies used on this website like React-icons  <span><Link to="https://getbootstrap.com/"><span style={{color:'rgb(104, 104, 240)'}}><RiExternalLinkFill /></span></Link></span>for managing easily the icons, if you want to know more, feel free to take a look on the source code on Github

</p>
        </Col>
        </Row>
        </Container>
       
    </section>
  )
}

export default AboutWebPage