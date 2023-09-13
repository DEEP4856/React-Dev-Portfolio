import {Navbar,Container,Nav} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github-mark-white.png';
import logodeep from '../assets/img/logodeep.png';
import { Link } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
import {  BrowserRouter as Router} from "react-router-dom";














export const NavBar=()=> {
    const [activelink , setActiveLink] = useState('home');
  
    const [color , setColor] = useState(false);

    
        // navbar showing on scroll function
        const onscroll =()=>{
           if (window.scrollY>=50) {
            setColor(true)
           }else{
            setColor(false)
           }
        }

        window.addEventListener("scroll",onscroll)
      //  return ()=> window.removeEventListener("scrolled",onscroll)
    
    

    const onupdateactivelink=(value)=>{
        // thus on clicking on-update link will be active and setactivelink will get the value home,skills, project 
         setActiveLink(value)
    }
    

    
    return (
      <Router>
      <Navbar expand="lg" className={color?"scrolled":""}>
        <Container>
          <Navbar.Brand >
            <h1 className='logonav '>PORTFOLIO</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={()=>onupdateactivelink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"className={activelink=== 'skills'? 'active-navbar-link':"navbar-link"}onClick={()=>onupdateactivelink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#about"className={activelink=== 'about'? 'active-navbar-link':"navbar-link"}onClick={()=>onupdateactivelink('about')}>About</Nav.Link>
              <Nav.Link href="#project"className={activelink=== 'project'? 'active-navbar-link':"navbar-link"}onClick={()=>onupdateactivelink('project')}>Projects</Nav.Link>
         </Nav>
         <span className="navbar-text">
            <div className='social-icon'>
                <a href='https://github.com/DEEP4856'> <img src={navIcon4} alt='logo'/></a>
                <a href='https://www.facebook.com/deep.bhattacharjee.3114'> <img src={navIcon2} alt='logo'/></a>
                <a href='https://www.instagram.com/e.r.r.o.r_l.i.f.e/tagged/?hl=en'> <img src={navIcon3} alt='logo'/></a>
            </div>
            <HashLink to='https://www.linkedin.com/in/deep-bhattacharjee-652b01252/'>
            <p style={{textDecoration:'none'}} className="vvd"> Let's Connect </p>
            </HashLink>
         </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
    );
  }
  
  // export default  NavBar;