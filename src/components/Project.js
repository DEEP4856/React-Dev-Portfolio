import { Col,Row,Container } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import calculator from "../assets/img/calculator_2.png"
import note from "../assets/img/note app.png"
import reactimg from "../assets/img/image-2.png"
import Drumkit from "../assets/img/drum-kit.jpg"
import Password from "../assets/img/Secure.jpg";
import colorsharp_2 from "../assets/img/color-sharp2.png";
import digiclock from "../assets/img/digi-clock.png"
import weather from "../assets/img/weather.jpg";
import user from "../assets/img/user-management.png";

// import { Link ,BrowserRouter as Router,Route } from "react-router-dom";


export const Project=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
       <section className="project" id="project">
        <Container>
            <Row>
             <Col>
             <div className="project-box">
                <h1 className="title-project">Projects</h1>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                 <div className="Project-item">
                
                     <a href="https://deep4856.github.io/Note-app/"><img src= {note} alt="image"/> </a>
                    
                       <h5>Note-App</h5>
                    </div>
                <div className="Project-item">
                     <a href="https://deep4856.github.io/Drum-Kit.github.io/"> <img src= {Drumkit} alt="image" /></a>  
                        
                       <h5>Drum-Kit</h5>
                    </div>
                <div className="Project-item">
                       <a href="https://deep4856.github.io/Password-generator-App/"><img src= {Password} alt="image"/></a> 
                       <h5>Password-generator</h5>
                    </div>
                <div className="Project-item">
                     <a href="https://deep4856.github.io/calculator/">   <img src= {calculator} alt="image"/></a>
                       <h5>Calculator</h5>
                    </div>
                <div className="Project-item">
                       <a href="https://scintillating-macaron-bab25c.netlify.app/"><img src= {reactimg} alt="image"/></a> 
                       <h5>React-Image-APP</h5>
             </div>
                <div className="Project-item">
                       <a href="https://deep4856.github.io/Digital-clock/"><img src= {digiclock} alt="image"/></a> 
                       <h5>Digital Clock</h5>
             </div>

        
             </div>
                <div className="Project-item">
                       <a href="https://user-management-system-8txu.onrender.com/"><img src= {user} alt="image"/></a> 
                       <h5>User-Management-System</h5>
             </div>

         </div>
                <div className="Project-item">
                       <a href="https://weak-pink-prawn-robe.cyclic.app/"><img src= {weather} alt="image"/></a> 
                       <h5>Weather App</h5>
             </div>






        
                </Carousel>
             

             </div>
             
             </Col>
            </Row>
        </Container>
             <img className="background-image-right" src={colorsharp_2} alt="image-background"/>
       </section>
    )
}
