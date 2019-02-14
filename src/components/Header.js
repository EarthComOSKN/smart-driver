import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Layout.css';
import queryString from 'query-string';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
	}
	GoToInProgress() {
		this.props.history.push('/');
	}
	componentDidMount() {
		const query = queryString.parse(this.props.location.search);
		if (query.user) {
			this.setState({ user: query.user });
			localStorage.setItem('user', query.user);
		} else {
			const user = localStorage.getItem('user');
			this.setState({ user });
		}
	}
	render() {
		const { user } = this.state;
		return (
			<div className="fixed">
				<div className="user d-flex justify-content-center align-items-center">{user}</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col txt-header pd-1 pointer active" onClick={() => this.GoToInProgress()}>
						กำลังดำเนินการ
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
