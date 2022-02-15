import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1>SPRING COLLECTION</h1>
			<p>
				Find your new natural routine with our vegan face care range. It's time
				to Evolve your face skincare routine.
			</p>
			<Button variant="outline-light" as={Link} to="/about">
				Learn More
			</Button>{' '}
		</div>
	);
}
