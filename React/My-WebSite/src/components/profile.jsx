import React from "react"
import {Image,Row,Col,Container} from "react-bootstrap"
import Fade from 'react-reveal/Fade';


function Profile(){
      return <Fade big cascade>
      
      <Container>
            <div className="text-center">
                  <h1>Profile</h1>
                  <h4>Full Stack Developer</h4>
                  <hr className="profile-hr"></hr>
                  <Row>
                        <Col lg="6" className="colonlar"><Image src = "me.jpg" roundedCircle></Image></Col>
                        <Col lg="6" className="colonlar"><h3>Details</h3><h5>Name:</h5><p>Ömer Bayramçavuş</p><h5>Age:</h5><p>19 years</p><h5>Location:</h5><p>Ankara/Turkey</p></Col>
                        <Col lg="12" className="colonlar"><h3>About me</h3><p className="text-center">I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p></Col>
                  </Row> 
            </div>
      </Container>
      </Fade>
}




export default Profile