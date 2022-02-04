import LoadMore from './components/LoadMore';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import './App.css';
import React, { useState } from 'react';
import DATA from './data.js';
import LearnMore from './components/LearnMore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  let [products, setProducts] = useState(DATA);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
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
          < LoadMore products={products} setProducts={setProducts}/>
        </Route>

        <Route exact path="/detail/:id">
          <ProductDetails products={products} />
        </Route>

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/learnmore" component={LearnMore} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>

  )
}

export default App;
