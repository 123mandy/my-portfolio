import React, {useEffect}from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import { FaGithub,FaRegPlayCircle,FaVuejs,FaNodeJs } from 'react-icons/fa';
import {AiFillHtml5, AiOutlineGithub,AiOutlineLinkedin, AiFillProject} from "react-icons/ai";
import {DiCss3, DiJavascript1, DiJqueryLogo, DiReact,DiRuby, DiPostgresql,DiMongodb} from "react-icons/di";
import {SiRubyonrails, SiFirebase} from "react-icons/si";
import {HiOutlineMail} from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "../component/background.png";
import Scrollspy from 'react-scrollspy';


function App() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="App" style={{'backgroundImage': `url('${background}')`}}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>
         <Navbar.Brand href="#home" style={{'font-family': 'Lobster, cursive'}}>Mandy Sun</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
           </Nav>
           <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
           <Nav>          
                <Nav.Link eventKey={2} href="#section-1">Project</Nav.Link>
                <Nav.Link eventKey={2} href="#section-2">About</Nav.Link>
                <Nav.Link eventKey={2} href="./resume.pdf" target="_blank">CV</Nav.Link>  
           </Nav>
           </Scrollspy>  
         </Navbar.Collapse>
         </Container>
       </Navbar>
       <div className="container">
          <div className="flexbox">
            <div className="div1">
              <h1 className="bigTitle">Mandy Sun</h1>
              <p className="des">A creative and passionate software engineer </p>
              <p className="des">A lifetime student, a great team-player, an optimist, and to be more things yet to come </p>
            </div>
            <div  className="div2">
               <img src="./girl.png" className="girlImg"/>
            </div>
          </div>
          
          <section className="projects" id="section-1">
            <div className="center">
              <h1  className="button-63">Project</h1>
            </div>
            <div className="boxes" data-aos="fade-up">
                <div className="info">
                  <div className="center">
                    <h1>BrickGo</h1>
                  </div>
                  <p className="projectContext">A online e-commerce platform for users to trade their lego set. Perfect app to find discontinued lego set!</p>
                  <Button variant="primary" className="button"><a href="https://github.com/123mandy/Brickgo-clients" style={{"color": "white", "text-decoration": "none"}} target="_blank"><FaGithub className="icon"/>Github</a> </Button>
                  <Button variant="light"  className="button"><a href="https://brick-go.netlify.app/" style={{"color": "black", "text-decoration": "none"}} target="_blank"><FaRegPlayCircle  className="icon"/>Demo</a></Button>
                </div>   
                <div className="img">
                    <img src="./lego.png" className="projectImg"/>
                </div>   
            </div>
            <div className="boxes" data-aos="fade-up">
                <div className="info">
                  <div className="center">
                    <h1>Purfect</h1>
                  </div>
                  <p className="projectContext">Purfect is a web application that brings a Tinder-like feel to adopting pets. This can be for any user or organisation to list animals for adoption.</p>
                  <Button variant="primary" className="button"><a href="https://github.com/123mandy/Project-2" style={{"color": "white", "text-decoration": "none"}} target="_blank"><FaGithub className="icon"/>Github</a></Button>
                  <Button variant="light"  className="button"><a href="https://project-2-5825e.web.app/" style={{"color": "black", "text-decoration": "none"}} target="_blank"><FaRegPlayCircle className="icon"/>Demo</a></Button>
                </div>   
                <div className="img">
                    <img src="./purfect.png" className="projectImg"/>
                </div>      
            </div>
            <div className="boxes" data-aos="fade-up">
                <div className="info">
                  <div className="center">
                    <h1>Hands-up</h1>
                  </div>
                  <p className="projectContext">In HandsUp, you can sign up your account and post what you want others to help. Every one can use comments to talk to each other. </p>
                  <Button variant="primary" className="button"><a href="https://github.com/123mandy/Project_Hands-Up" style={{"color": "white", "text-decoration": "none"}} target="_blank"><FaGithub className="icon"/>Github</a></Button>
                  <Button variant="light"  className="button"><a href="https://handsup-2022.herokuapp.com/" style={{"color": "black", "text-decoration": "none"}} target="_blank"><FaRegPlayCircle className="icon"/>Demo</a></Button>
                </div>   
                <div className="img">
                    <img src="./handsup.png" className="projectImg"/>
                </div>      
            </div>
            <div className="boxes" data-aos="fade-up">
                <div className="info">
                  <div className="center">
                    <h1>Tic-Tac-Toe</h1>
                  </div>
                  <p className="projectContext">This is a simple tic-tac-toe web game, you can play with your friend or the smartest Octocat AI! </p>
                  <Button variant="primary" className="button"><a href="https://github.com/123mandy/Project_Tic-Tac-Toe" style={{"color": "white", "text-decoration": "none"}} target="_blank"><FaGithub className="icon"/>Github</a></Button>
                  <Button variant="light"  className="button"><a href="https://123mandy.github.io/Project_Tic-Tac-Toe/" style={{"color": "black", "text-decoration": "none"}} target="_blank"><FaRegPlayCircle className="icon"/>Demo</a></Button>
                </div>   
                <div className="img">
                    <img src="./tic.png" className="projectImg"/>
                </div>      
            </div>
          </section >

          <section id="section-2">
             <div className="center">
                    <h1  className="button-63">Skill</h1>
             </div>
             <section className="flexbox2 bottomBorder" data-aos="fade-right">
                 <div className="iconDiv">
                   <AiFillHtml5 size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiCss3 size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiJavascript1 size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiJqueryLogo size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiReact size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <FaVuejs size={70} style={{"color": "#0d6efd"}}/>
                 </div>
             </section>
             <div className="flexbox2 bottomBorder"  data-aos="fade-left">
                 <div className="iconDiv">
                   <DiRuby size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <SiRubyonrails size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <FaNodeJs size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiPostgresql size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <DiMongodb size={70} style={{"color": "#0d6efd"}}/>
                 </div>
                 <div className="iconDiv">
                   <SiFirebase size={70} style={{"color": "#0d6efd"}}/>
                 </div>
             </div>
          </section>
       </div>
       <div className="footer">
         <div className="footer-icon" data-aos="fade-right">
           <a href="mailto:xuetingsun1213@gmail.com" className="big-icon"><HiOutlineMail size={50}/></a>
           <a href="https://github.com/123mandy" className="big-icon"><AiOutlineGithub size={50}/></a>
           <a href="https://www.linkedin.com/in/mandy-sun-xueting/" className="big-icon"><AiOutlineLinkedin size={50}/></a>
         </div>
         <div className="center">
            <p className="no-margin">@2022 Mandy Sun</p>
         </div>
       </div>
    </div>
    
  );
}

export default App;
