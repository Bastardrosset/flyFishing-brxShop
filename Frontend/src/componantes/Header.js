import React from 'react'
import {Navbar, Container, Nav, Image} from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
        <Container>
          
            <Navbar.Brand href="/">BRX-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:'auto'}}>
                <Nav.Link href="/connection" style={{marginRight:'15px'}}>
                  <i className="fas fa-user" style={{marginRight:'5px'}}></i>CONNEXION
                </Nav.Link>
                <Nav.Link href="/panier">
                    <i className="fas fa-shopping-cart" style={{marginRight:'5px'}}></i>PANIER
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header
