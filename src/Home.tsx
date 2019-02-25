import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<h1>Foosball</h1>
			<Link to="/match">Start match</Link>
		</div>
	);
}
