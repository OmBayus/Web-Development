import React from "react"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import {VscGithub} from "react-icons/vsc"
import {Link} from "react-router-dom"
import Navbars from "./navbars"

function MyNav({background}){

      return <Navbar variant="dark" className={background + " navbar-genel"}>
            <Navbar.Brand as={Link} to="/"><img alt="" src="reactlogo.png" width="30" height="30" className="d-inline-block align-top react-logo"/>{' '}OmBayus</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                        <Nav.Link className="navv" as={Link} to="/Blog">Blog</Nav.Link>
                        <Nav.Link className="navv" as={Link} to="/Hakkımda">Hakkımda</Nav.Link>
                        <NavDropdown className="navv" title="My Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" disabled>Terminal Messenger</NavDropdown.Item>
                        </NavDropdown>
                  </Nav>
                  <Nav className="ml-auto mr-5">
                        <Nav.Link className="navv" href="https://github.com/ombayus" target="_blank"><VscGithub className="mb-1 mr-1"/>Github</Nav.Link>
                  </Nav>
            </Navbar.Collapse>
            <Navbars/>
      </Navbar>
}

export default MyNav