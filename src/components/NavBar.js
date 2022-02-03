import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';

function NavBar() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Natural Skincare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/learnmore">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>  
            </Nav>
            <Nav className="d-flex">
            <Login/>
            <Signup/>
            
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;