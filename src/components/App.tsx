import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import RouteHome from '../routes/Home';
import RouteResults from '../routes/Results';
import './App.css';

const App = () => (
	<Router>
		<div className="App">
			<h1>LDAP</h1>
			<br />
			<Route exact={true} path="/" component={RouteHome} />
			<Route path="/results" component={RouteResults} />
		</div>
	</Router>
);

export default App;
