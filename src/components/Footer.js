import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github-mark-white.png';
import portfolioimg from '../assets/img/portfolio-logo-black-and-white.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Footer=()=>{
    return(
        <div>
            <footer className="footer">
                <Container>
                  <div className="footer-bx">

                 
                     <Row>
                     <Col sm={6}>
                        <h1 className="portfolio-img">JOIN WITH US 🤝</h1>
                         
                     </Col>
                     <Col sm={6}>
                    <div className= "social-icon footer-icons" >
                     <a href='https://www.linkedin.com/in/deep-bhattacharjee-652b01252/'> <img src={navIcon1} alt='logo'/></a>
                     <a href='https://www.facebook.com/deep.bhattacharjee.3114'> <img src={navIcon2} alt='logo'/></a>
                     <a href='https://www.instagram.com/e.r.r.o.r_l.i.f.e/tagged/?hl=en'> <img src={navIcon3} alt='logo'/></a>
                     <a href='https://github.com/DEEP4856'> <img src={navIcon4} alt='logo'/></a>
                     
                    </div>
                    
                   
                     </Col>

                    
                     </Row>
                     <Row>
                        <Col sm={6}>
                         
                        <h6 className="Thankyou">Thank You For Visiting 💛 <br></br>Designed with 💖 by Deep Bhattacharjee</h6>
                        </Col>
                        <Col sm={6}>
                        <p>©CopyRight 2023. All Rights Reserved</p>
                     </Col>
                     </Row>
                     </div>
                </Container>
            </footer>
        </div>
    )
}