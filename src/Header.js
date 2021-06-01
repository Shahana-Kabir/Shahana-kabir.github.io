import { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.scss';
import { Link } from 'react-router-dom';
import resume2 from './assets/resume.pdf';

const Header = () => {
    return (<div>
        <Navbar className="header2" expand="lg" variant="dark">
            <Navbar.Brand className = "header__left" >
            <Link className = "header2__left__title" to="/"> 
                    Shahana Kabir
                    </Link>
                </Navbar.Brand>

            <Nav className = "header2__right">
                {/* <Nav.Link > */}
                <a  className = "mr-4 header2__right__items d-flex flex-column justify-content-center"  href = {resume2} >Resume</a>
                
                {/* <Link className="header2__right__items" to="/Resume"> 
                    Resume 
                    
                    </Link>                    */}
                {/* </Nav.Link> */}
          
                <Nav.Link >
                    <Link className="header2__right__items" to="/Projects"> 
                    Projects
                    </Link>
                </Nav.Link>

                {/* <Nav.Link >
                <Link className="header2__right__items" to="/Contact">
                        Contact
                    </Link>
          </Nav.Link> */}
            </Nav>
        </Navbar>
    </div>);
}

export default Header;