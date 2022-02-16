import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import CartBtn from './CartBtn.js';

function NavBar() {
  const navStyle = {
    color: 'grey',
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={navStyle} href="#home">
            Natural Skincare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Login />
              <Signup />
              <CartBtn />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
