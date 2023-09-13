import { Container, Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorsharp from '../assets/img/color-sharp.png';


export const Skills=()=>{
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
   <section className="skill" id="skills">
    <Container>
        
            <div className="skill-bx">
                <h2>
                    Skills
                </h2>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src= {meter1} alt="image"/>
                       <h5>HTML</h5>
                    </div>
                    <div className="item">
                        <img src= {meter2} alt="image"/>
                       <h5>CSS</h5>
                    </div>
                    <div className="item">
                        <img src= {meter3} alt="image"/>
                       <h5>JAVASCRIPT</h5>
                    </div>
                    <div className="item">
                        <img src= {meter1} alt="image"/>
                       <h5>REACT</h5>
                    </div>
                    <div className="item">
                        <img src= {meter2} alt="image"/>
                       <h5>BOOTSTRAP</h5>
                    </div>
                    <div className="item">
                        <img src= {meter3} alt="image"/>
                       <h5>JQUERY</h5>
                    </div>
                    <div className="item">
                        <img src= {meter1} alt="image"/>
                       <h5>NODE-JS</h5>
                    </div>
                    <div className="item">
                        <img src= {meter2} alt="image"/>
                       <h5>EXPRESS-JS</h5>
                    </div>
                    <div className="item">
                        <img src= {meter3} alt="image"/>
                       <h5>MONGODB</h5>
                    </div>
                    <div className="item">
                        <img src= {meter1} alt="image"/>
                       <h5>GIT</h5>
                    </div>
                    <div className="item">
                        <img src= {meter2} alt="image"/>
                       <h5>PROBLEM-SOLVING</h5>
                    </div>
                    <div className="item">
                        <img src= {meter3} alt="image"/>
                       <h5>GIT-HUB</h5>
                    </div>
                    <div className="item">
                        <img src= {meter3} alt="image"/>
                       <h5>POST MAN</h5>
                    </div>
                </Carousel>
            </div>
        
    </Container>
    <img className="background-image-left" src={colorsharp}/>
   </section> 
)

}