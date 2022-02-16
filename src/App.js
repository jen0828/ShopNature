import LoadMore from './components/LoadMore';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Checkout from './components/Checkout';
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
								{products.map((a, i) => {
									return <ProductCard products={products[i]} i={i} key={i} />;
								})}
								;
							</div>
						</div>
						<LoadMore products={products} setProducts={setProducts} />
					</Route>
					<Route exact path="/detail/:id">
						<ProductDetail products={products} />
					</Route>

					<Route exact path="/cart" component={Cart} />
					<Route exact path="/about" component={LearnMore} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
