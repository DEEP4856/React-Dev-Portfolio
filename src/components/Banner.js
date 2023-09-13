import { Container, Row , Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export const Banner =()=>{


 const [text]=useTypewriter({
    words:["A Full Stack Web Developer","Welcome to my Portfolio"],
    loop: {},
    typeSpeed:100,
    deleteSpeed:100
 });










    return(
        <section className="banner" id='home'>
            <Container>
               <Row className="align-items-center" style={{marginTop:'-80px'}}>
              
               <Col xs={15} md={6} xl={7}>
              
            <div>
               <h1> <span className="tage-line">Hi There, <br></br>I'm Deep Bhattacharjee </span></h1> 
             </div>

                 
             <div>
                <h1 className="txt-rotate  wrap">{text}  <Cursor/></h1> 
             </div>
                
             
             {/* <p>
                I am a web developer with a vast array of knowledge in many different front end <br></br>
                and back end languages, responsive frameworks, databases, and best code practices.  
                
             </p> */}
             
          <a href='https://www.linkedin.com/in/deep-bhattacharjee-652b01252/' className="banner-lets-connect"  style={{color:'white' , textDecoration:'none'}}>Let's Connect<ArrowRightCircle size={25}/> </a>
               
               </Col>
           
            
               <Col xs={14} md={6} xl={5}>

                <div>
                <img src={headerImg} alt="Header Img"></img>
                </div> 
                </Col>

                </Row> 
            </Container>
        </section>
    )
}