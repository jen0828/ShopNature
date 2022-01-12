import NavBar from './NavBar'
import './App.css';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Data from './data.js'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {

  let [products, setProducts] = useState(Data);

  return (
    <div className="App">
      <Router>
      <Route exact path="/"> 
      < NavBar/>

      <div className="jumbotron">
        <h1>SPRING COLLECTION</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <Button variant="secondary">Learn More</Button>{' '}
      </div>
  
      </Route>
      <Route exact path="/detail">
        <div>Hello!</div>
      </Route>
      
      <br></br>

      <div className="container">
        <div className="row">
          {
            products.map((a, i) => {
              return <Card products={products[i]} i={i} key={i} />
            })};
        </div>
      </div>
      </Router>
    </div>

  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.products.image} width="100%" alt='' />
      <h4>{props.products.title}</h4>
      <p>{props.products.content} & {props.products.price}</p>
    </div>
  )
}
export default App;
