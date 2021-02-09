import React from "react"
import {Container, Image,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdDateRange} from "react-icons/md"

function CardBlog(){


      return <Container className="Full-Card">
      <a as={Link} to="/Blog" href="/Blog" className="Card-link">

            <Row>
            <Col xl={3} lg={4} md={5}><Image src="me.jpg" thumbnail className="Card-img"/></Col>
            <Col xl={9} lg={8} md={7}>
                  <p className="text-center text-info">- Project -</p>
                  <p className="text-center text-muted"><span className="mr-5"><CgProfile className="card-icon"/>Yazar Ombayus</span><span className="ml-5"><MdDateRange className="card-icon"/>24 Ekim 2020</span></p>
                  <h2 className="pb-2">This is Me</h2>
                  <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one</p>
            </Col>
                  
            </Row>
      </a>

      </Container>
      
}


export default CardBlog