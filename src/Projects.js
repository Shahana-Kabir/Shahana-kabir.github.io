import { Component } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './projects.scss';
import promo from './assets/happy.png';
import promo2 from './assets/promo2.png';
import listing1 from './assets/listing1.png';
import listing2 from './assets/listing2.png';
import instock1 from './assets/instock1.png';



const Projects = () => {
    return ( <Container fluid className = "projects"> 
           
           <h1 className = "projects__title d-flex justify-content-center mt-4 mb-4">
               My projects
           </h1>
           <div className = "projects__item1 ">
               <div className = "ml-4 mr-4">
           <h2 className = " pt-4 projects__item1__happy d-flex justify-content-center">
               Happy Kids
           </h2>
           <p >
               An interactive app to look for nannies. You can login as a parent, post an Ad with your criteria for a nanny.
               On the other side, a nanny can login, look for jobs there and apply. 
           </p>
           <div className = "d-flex justify-content-center">
          
               <a href = "https://github.com/Shahana-Kabir/Happykids"> View code </a>              
           
           </div>

           <div className = "d-flex justify-content-center mt-4 mb-4 ">
           <img  className = "projects__image" src = {promo}  />
           {/* <img  className = "projects__image" src = {promo2}  /> */}
           
           </div>
           <h5 className = " pt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, SCSS, BootStrap, React, Javascript, Node, Express.
           </h5>
           </div>
           </div>

           <div className = "projects__item1 mt-4">
               <div className = "ml-4 mr-4">
           <h2 className = " pt-4 projects__item1__classified d-flex justify-content-center">
               Classified-Listing
           </h2>
           <p>
               Peer to peer marketplace for classified listing.
           </p>
           <div className = "d-flex justify-content-center">
           
               <a href = "https://github.com/Shahana-Kabir/classified-listing"> View code </a>              
           
           </div>

           <div className = "d-flex justify-content-center mt-4">
           <img  className = "mb-4 projects__image" src = {listing1}  />
           {/* <img  className = "projects__image" src = {listing2}  /> */}
           
           </div>
           <div className = "mt-4 d-flex justify-content-center mb-2">
           <h5 >
             Technologies used: HTML5, SCSS, BootStrap, React, Javascript, Node, Express.   
           </h5>
           </div>
           </div>
           </div>

           <div className = "projects__item1 mt-4">
               <div className = "mr-4 ml-4">
           <h2 className = "pt-4 projects__item1__instock d-flex justify-content-center">
               InStock
           </h2>
           <p>
               A warehouse and inventory managemnet app built along with 4 other developers.
           </p>
           <div className = "d-flex justify-content-center">
           
               <button>Private repository</button>
           </div>

           <div className = "d-flex justify-content-center mt-4">
           <img  className = "mb-4 projects__image" src = {instock1}  />
           {/* <img  className = "projects__image" src = {listing2}  /> */}
           
           </div>
           <h5 className = "mt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, SCSS, React, Javascript, Node, Express, GitHub.  
           </h5>
           </div>
           </div>

           
        
        </Container>);
}
 
export default Projects;