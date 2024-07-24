import React from 'react'
import { Nav, Container, Form, Navbar } from "react-bootstrap";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



export default function Navb(props) {
 
  return (
    <Navbar expand="lg" className=" justify-content-between navbar" sticky="top" bg={props.Mode} data-bs-theme={props.Mode}>
      <Container className='NavBarStyle'>
        <Navbar.Brand as={Link} to="/" >{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="li" to="/">{props.Home}</Nav.Link>
            <Nav.Link  as={Link} className="li" to="/About">{props.About}</Nav.Link>

          </Nav>
          <div className='vw-10'>
            <button className={`btn btn-${props.darkcolor==="Green"?"success":props.darkcolor==="Red"?"danger":"primary"} mx-2 ${props.Mode === "dark" ? "d-flex" : "d-none"}`} onClick={props.count}>{ props.darkcolor==="Green"?"Green":props.darkcolor==="Red"?"Red":"Original"} Mode</button>
          </div>

          <Form className={`text-${props.Mode === "dark" ? "light" : "dark"}`} >
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label={`Enable ${props.Mode === 'dark' ? 'light' : 'dark'} Mode`}
              onClick={props.ToggleMode}
            />
          </Form>

        </Navbar.Collapse>

      </Container>


    </Navbar>
  )
}
Nav.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired

}
Nav.defaultProps = {
  title: "Set Title",
  About: "Set About"

}