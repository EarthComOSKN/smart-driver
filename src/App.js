import React, { Component } from 'react';
import Header from './components/Header';
import MainRoute from './routes/MainRoute';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
	render() {
		return (
			<div id="App">
				<Header />
				<MainRoute />
			</div>
		);
	}
}
export default App;
