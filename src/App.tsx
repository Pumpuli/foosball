import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import OngoingMatch from './OngoingMatch';
import Home from './Home';

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route path="/match" component={OngoingMatch} />
					<Route component={Home} />
				</Switch>
			</>
		);
	}
}

export default App;
