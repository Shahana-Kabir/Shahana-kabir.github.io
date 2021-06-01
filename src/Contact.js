import { Component } from 'react';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './contact.scss';
import logo1 from './assets/git.png';
import logo2 from './assets/linkedin.png';
import logo3 from './assets/gmail.png';

const Contact = () => {
    return (<Container fluid className = "contact d-flex flex-column justify-content-center">
            <div className = "d-flex justify-content-center">
                <h2 className = "contact__title mt-4 mb-4">Contact me</h2>
                </div>
                <Col >
                <div className = "ml-4 mr-4 mt-4 mb-4 d-flex justify-content-between">
                <a  href = "https://github.com/Shahana-Kabir"> <img src = {logo1} width = "30"/ > </a>
              <a  href = "https://www.linkedin.com/in/shahana-kabir"> <img src = {logo2} width = "30"/ > </a>
              <a  href = "mailto:shahana.kabir@gmail.com"> <img src = {logo3} width = "30"/ > </a>
            </div>
            </Col>

    </Container>)
{/* // //     return ( <div  className = "contact">
// //         <div className = "d-flex justify-content-center contact__title">
// //         <h2 className = "mt-4">Contact me</h2>
// //         </div>

        
// //         <Container fluid className = "contact ml-0 mr-0 d-flex flex-column justify-content-center"> 
           
// //        <Row className = "ml-4 mr-4 mt-8 d-flex justify-content-between contact__logo"> 
// //       <a  href = "https://github.com/Shahana-Kabir"> <img src = {logo1} width = "30"/ > </a>
// //       <a  href = "https://www.linkedin.com/in/shahana-kabir"> <img src = {logo2} width = "30"/ > </a>
// //       <a  href = "mailto:shahana.kabir@gmail.com"> <img src = {logo3} width = "30"/ > </a>
// //       </Row>
          
// //    </Container>
// //    </div>
//   ); */}
}
 
export default Contact;