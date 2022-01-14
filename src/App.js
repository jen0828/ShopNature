import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
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

          <button className="btn btn-secondary" onClick={() => {

            axios.get('http://localhost:8000/products')
              .then((result) => { setProducts([...products, ...result.data]) })
              .catch(() => { console.log('Errors!') })

          }}>See more</button>

        </Route>
        <Route exact path="/detail/:id">
          <ProductDetails products={products} />
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>
      </Router>

    </div>

  )
}

export default App;
