import React from "react"
import {Carousel} from "react-bootstrap"

function MyCarousel(){
      return <Carousel>
      <Carousel.Item  href="/cv">
        <img
          className="d-block w-100"
          src="CarouselImg/1.svg"
          alt="CV"
        />
        <Carousel.Caption>
          <h3>Cv</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="CarouselImg/2.svg"
          alt="Blog"
        />
    
        <Carousel.Caption>
          <h3>Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="CarouselImg/3.svg"
          alt="My Projects"
        />
    
        <Carousel.Caption>
          <h3>My Projects</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
}


export default MyCarousel