import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Resume from './Resume';
import resume2 from './assets/resume.pdf';

function App() {
  return (
    
    <HashRouter> 
    <Header />
    
     {/* <a href = {resume2}> resume </a> */}
    <Switch>
    <Route path = '/' exact component = {Hero} /> 
    <Route path = '/Projects'  component = {Projects} />  
    
    <Route path = '/Resume'  component = {Resume} />
    <Route path = '/Contact'  component = {Contact} />
  
    {/* <Route path = '/Contact'  component = {Contact} />  */}
    </Switch>
    <Footer />

    </HashRouter>
  );
}

export default App;
