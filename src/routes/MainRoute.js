import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import InProgress from '../views/Main/InProgress';
import Login from '../views/Login/Login';
import Complete from '../views/Main/Complete';
class MainRoute extends Component {
	render() {
		return (
				<Switch>
					<Route exact path="/" component={InProgress} />
					<Route path="/login" component={Login} />
					<Route path="/complete" component={Complete} />
				</Switch>
		);
	}
}

export default MainRoute