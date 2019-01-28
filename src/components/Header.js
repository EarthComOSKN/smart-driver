import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Layout.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			inprogress: true,
			complete: false,
		};
	}
	GoToInProgress() {
		this.setState({ inprogress: true, complete: false });
		this.props.history.push('/');
	}
	GoToComplete() {
		this.setState({ inprogress: false, complete: true });
		this.props.history.push('/complete');
	}
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		const { inprogress, complete } = this.state;
		return (
			<div className="fixed">
				<div className="user d-flex justify-content-center align-items-center">user</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div
						className={'col txt-header pd-1 pointer' + (inprogress ? ' active' : '')}
						onClick={() => this.GoToInProgress()}
					>
						กำลังดำเนินการ
					</div>
					<div
						className={'col txt-header pd-1 pointer' + (complete ? ' active' : '')}
						onClick={() => this.GoToComplete()}
					>
						งานที่เสร็จแล้ว
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
