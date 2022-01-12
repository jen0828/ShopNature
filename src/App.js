import item from './item.jpg';
import item1 from './item-1.jpg';
import item2 from './item-2.jpg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Data from './data.js'

function App() {

  let [products, setProducts] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Natural Skincare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="jumbotron">
        <h1>SPRING COLLECTION</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <Button variant="secondary">Learn More</Button>{' '}
      </div>

      {/* <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={item} width="100%" alt='' />
            <h4>Product</h4>
            <p>Detail</p>
          </div>
          <div className="col-md-4">
            <img src={item1} width="100%" alt='' />
            <h4>Product</h4>
            <p>Detail</p>
          </div>
          <div className="col-md-4">
            <img src={item2} width="100%" alt='' />
            <h4>Product</h4>
            <p>Detail</p>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <Card products={products}/>
          <Card products={products}/>
          <Card products={products}/>
        </div>
      </div>

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={item} width="100%" />
      <h4>{ props.products[0].title }</h4>
      <p>{ props.products[0].content } & { props.products[0].price }</p>
    </div>
  )
}
export default App;
