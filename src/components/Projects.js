import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/7.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/8.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cookenu",
    
      imgUrl: projImg1,
      url: "https://cookenu.vercel.app/login"
    },
    {
      title: "LabEddit",
   
      imgUrl: projImg2,
      url: "https://labeddit-nine.vercel.app"
      
    },
    {
      title: "Pokedex",
    
      imgUrl: projImg3,
      url: "https://pokedex-tawny-psi.vercel.app"
    },
    {
      title: "Projeto Brainn",
    
      imgUrl: projImg4,
      url: "https://rodada-cases-semana-4.vercel.app "
    },
    {
      title: "Future Eats",
      
      imgUrl: projImg5,
      url: "https://labefood5-shaw.surge.sh/login"
    },
    {
      title: "Promobit",

      imgUrl: projImg6,
      url: "https://promobit-master.vercel.app"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
              
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
