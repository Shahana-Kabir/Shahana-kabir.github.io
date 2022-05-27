import { Component } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './projects.scss';
import promo from './assets/happy.png';
import lorem from './assets/lp.png';
import menu from './assets/menu.png';
import promo2 from './assets/promo2.png';
import listing1 from './assets/listing1.png';
import listing2 from './assets/listing2.png';
import instock1 from './assets/instock1.png';



const Projects = () => {
    return ( <Container fluid className = "projects"> 
           
           <h1 className = "projects__title d-flex justify-content-center mb-4">
               {/* My projects */}
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
           <p className = "projects__description d-flex justify-content-center">
             Technologies used: HTML5, SCSS, BootStrap, React, Javascript, Node, Express.
           </p>

             <a className = "projects__description  d-flex justify-content-center mb-2" href = "https://www.loom.com/share/dd1841da8ddf4de587b0d264d96c32bc">Presentation link</a> 
          
           </div>
           </div>

           <div className = "projects__item1 mt-2 ">
               <div className = "ml-4 mr-4">
           <h2 className = " pt-4 projects__item1__happy d-flex justify-content-center">
               Menu
           </h2>
           <p className = "d-flex justify-content-center">
           An application with various menus and clients will have the option to choose the food types too.
 
           </p>
           <div className = "d-flex justify-content-center">
          
               <a href = "https://github.com/Shahana-Kabir/Menu"> View code </a>              
           
           </div>

           <div className = "d-flex justify-content-center mt-4 mb-4 ">
           <img  className = "projects__image" src = {menu}  />
           {/* <img  className = "projects__image" src = {promo2}  /> */}
           
           </div>
           <p className = "projects__description d-flex justify-content-center">
             Technologies used: HTML5, SCSS, BootStrap, React, Javascript, Node, Express.
           </p>

             <a className = "projects__description  d-flex justify-content-center mb-2" href = " https://shahana-kabir.github.io/Menu/">Deployed link</a> 
          
           </div>
           </div>

           <div className = "projects__item1 mt-2 ">
               <div className = "ml-4 mr-4">
           <h2 className = " pt-4 mb-4 projects__item1__happy d-flex  justify-content-center">
               Lorem Ipsum generator
           </h2>
           <p className = "d-flex justify-content-center">
           It’s an application for generating selected number of  Lorem ipsums.  
           </p>
           <div className = "d-flex justify-content-center">
          
               <a href = "https://github.com/Shahana-Kabir/Loren-ipsum-generator"> View code </a>              
           
           </div>

           <div className = "d-flex justify-content-center mt-4 mb-4 ">
           <img  className = "projects__image" src = {lorem}  />
           {/* <img  className = "projects__image" src = {promo2}  /> */}
           
           </div>
           <p className = "projects__description d-flex justify-content-center">
             Technologies used: HTML5, CSS, React, Javascript.
           </p>

             <a className = "projects__description  d-flex justify-content-center mb-2" href = "https://shahana-kabir.github.io/Loren-ipsum-generator/">Deployed link</a> 
          
           </div>
           </div>

          

           <div className = "projects__item1 mt-2">
               <div className = "mr-4 ml-4">
           <h2 className = "pt-4 projects__item1__instock d-flex justify-content-center">
               InStock
           </h2>
           <p className = "d-flex justify-content-center">
               A warehouse and inventory managemnet app built along with 4 other developers.
           </p>
           <div className = "d-flex justify-content-center">
           
               <button>Private repository</button>
           </div>

           <div className = "d-flex justify-content-center mt-4">
           <img  className = "mb-4 projects__image" src = {instock1}  />
           {/* <img  className = "projects__image" src = {listing2}  /> */}
           
           </div>
           <p className = "mt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, SCSS, React, Javascript, Node, Express, GitHub.  
           </p>
           <a className = "mt-4 d-flex justify-content-center mb-2" href = "https://www.loom.com/share/7d78934ce86d40b6a615b893e9d2845f">
             Presentation link  
           </a>
           </div>
           </div>

           
        
        </Container>);
}
 
export default Projects;