import React from "react"
import {Container,Row,Col} from "react-bootstrap"
import {FaLinkedinIn,FaGithub,FaInstagram} from "react-icons/fa"

function Footer(){
      return <footer>
      <Container >
  <Row>
    <Col><div className="copyright">© 2020 Copyright: <a href="mailto:omerbayramcavus@gmail.com">omerbayramcavus@gmail.com</a></div></Col>
    <Col><ul className="social-icons">
              <li><a className="linkedin" href="https://www.linkedin.com/in/%C3%B6mer-bayramcavu%C5%9F-5b25731a8/" target="__blank"><FaLinkedinIn/></a></li>
              <li><a className="github" href="https://github.com/ombayus" target="__blank"><FaGithub/></a></li>
              <li><a className="instagram" href="https://www.instagram.com/omerbayramcavus" target="__blank"><FaInstagram/></a></li>
            </ul></Col>
  </Row>
      </Container>
</footer>
}


export default Footer