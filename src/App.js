import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import './App.css';
import React, { useState } from 'react';
import Data from './data.js';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                  return <ProductCard products={products[i]} i={i} key={i} />
                })};
            </div>
          </div>
        </Route>
        <Route exact path="/detail/:id">
          <ProductDetails products={products} />
        </Route>
      </Router>

      <button className="btn btn-secondary" onClick={() => {

        axios.get('http://localhost:8000/products')
          .then((result) => { setProducts([...products, ...result.data]) })
          .catch(() => { console.log('Errors!')})

      }}>See more</button>
    </div>

  )
}

export default App;
