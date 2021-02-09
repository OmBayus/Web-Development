import React from "react"
import {Jumbotron,Button, Container} from "react-bootstrap"
import Navbar from "./navbar"
import Slide from 'react-reveal/Slide';
import Shake from "react-reveal/Shake"
import {Link} from "react-router-dom"



function Hello(props){

   
      return <Jumbotron className="jumbotrona">
            <Navbar background="navbar-bg"/>
            <Container fluid>
                  <div className="text-center hello">
                        <img src="roket.png" className="roket1" alt="roket1"></img>
                        <img src="roket.png" className="roket2" alt="roket2"></img>
                        <Slide top>
                              <h1 className="hello-topic">{props.name}</h1>
                        </Slide>
                        <hr className="hello-hr"></hr>
                        <Slide bottom>
                              <h2  className="info">{props.dis}</h2>
                        </Slide>
                        <div className="learn-more">
                              <Shake>
                                    <Button variant="outline-light" size="lg" as={Link} to="/hakkımda">Learn more</Button>
                              </Shake>
                        </div>
                  </div>
            </Container>
    </Jumbotron>
        
}

export default Hello
