import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import InProgress from '../views/Main/InProgress';
import Login from '../views/Login/Login';
class MainRoute extends Component {
	render() {
		return (
				<Switch>
					<Route exact path="/" component={InProgress} />
					<Route path="/login" component={Login} />
				</Switch>
		);
	}
}

export default MainRoute