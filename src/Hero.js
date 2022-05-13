import { Component } from 'react';
import { Nav, Navbar, Container, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './hero.scss';
import pic2 from './assets/pic2.jpeg';

const Hero = () => {
    return ( 
      
     <div className = " hero">
        
        <div className = "hero__para"> 
        <h1 className = "ml-4">
            Hello, I am Shahana Kabir

        </h1>
        {/* <h2 className = "hero__para ml-4">
           A Full Stack Web Developer
            
        </h2> */}
        <p className = "mt-4 ml-4">
        I'm a passionate full-stack web developer experienced in building interactive web apps and nothing feels more exciting to me more than learning new web development skills and apply them. 

        <p className = "mt-4">    
        I am currently looking for new employment opportunities.
        </p>

        </p>
        </div>
        
        {/* <div className = "d-flex flex-column justify-content-center" >
        <img  className = "hero__image mr-4" src = {pic2}  />
       </div> */}
        </div> );
}
 
export default Hero;