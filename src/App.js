import DetailPage from './DetailPage'
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
          <NavBar />
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
          <DetailPage />
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
