import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">BRX-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:'auto'}}>
                <Nav.Link href="/panier">
                    <i className="fas fa-shopping-cart"></i>PANIER
                </Nav.Link>
                <Nav.Link href="/connection"><i className="fas fa-user"></i>CONNEXION
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header
