import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import './App.css';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import LearnMore from './components/LearnMore';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  let [products, setProducts] = useState(Data);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/">
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

          <Button className="color" variant="outline-light" size="lg" onClick={() => {

            axios.get('http://localhost:8000/products')
              .then((result) => { setProducts([...products, ...result.data]) })
              .catch(() => { console.log('Errors!') })

          }}>Click me to load more</Button>{' '}

        </Route>
        <Route exact path="/detail/:id">
          <ProductDetails products={products} />
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>

        <Route path='/learnmore'>
          <LearnMore></LearnMore>
        </Route>
      </Router>

    </div>

  )
}

export default App;
