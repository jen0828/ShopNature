import NavBar from './NavBar'
import Jumbotron from './Jumbotron'
import './App.css';
import React, { useState } from 'react'
import Data from './data.js'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {

  let [products, setProducts] = useState(Data);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          < NavBar />
          <Jumbotron />
          <br></br>
          <div className="container">
            <div className="row">
              {
                products.map((a, i) => {
                  return <Card products={products[i]} i={i} key={i} />
                })};
            </div>
          </div>
        </Route>
        <Route exact path="/detail">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">Product</h4>
                <p>Details</p>
                <p>£60.00</p>
                <button className="btn btn-danger">Order</button>
              </div>
            </div>
          </div>
        </Route>
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
