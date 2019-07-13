import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Header extends React.Component {
  render () {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href="#home">Meal Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto">
            <Nav.Link href="#home">File</Nav.Link>
            <Nav.Link href="#home">Edit</Nav.Link>
            <Nav.Link href="#home">View</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
