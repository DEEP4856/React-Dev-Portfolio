import { Col, Container, Row } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from 'react-bootstrap/Button';
import colorsharp from '../assets/img/color-sharp.png';





   
   





export const About=()=>{


    const [text]=useTypewriter({
        words:["ABOUT ME"],
        loop: {},
        typeSpeed:80,
        deleteSpeed:100
     });





    return(
       <section >
        <Container>
            <div className="about-bx" id="about">
            <Row>

                <Col sm={6}>
                   <p className="about-txt">{text} <Cursor/></p>
                   <Button  className="submit resume" variant="primary" type="submit" >
                      DOWNLOAD MY RESUME
                    </Button>
                </Col>

                <Col sm={6}>
                    <h3 className="code-enthu"> 🚀Code Enthusiast </h3>
                    <p className="myself">
                 My self Deep Bhattacharjee. I'm a dedicated web developer with a strong passion for crafting exceptional digital solutions that make a difference.
                    I've honed my skills in front-end and back-end development to create user-friendly, responsive, and visually stunning websites and web applications. </p>

                <h3 className="About-headings">📚 Education</h3>
                <p>School: DAV PUBLIC SCHOOL, ASANSOL</p>
                <p>College: GKCIET,MALDA,2023</p>
                <p>Degree:B.TECH (ELECTRICAL)</p>

                <h3 className="About-headings">🌟 Passion</h3>
                <p>I thrive on staying up-to-date with the latest web development trends and technologies. My commitment to lifelong learning ensures that I can always bring fresh, innovative solutions to any project.</p>
                <h3>📧 Contact</h3>
              <p>Feel free to reach out to me at [dbhatt2812@gmail.com] or connect with me on [LinkedIn] to discuss how I can contribute to your next web development project.</p>


                </Col>
            </Row>
            </div>
        </Container>
        <img className="background-image-left" src={colorsharp}/>
       </section>
    )
}