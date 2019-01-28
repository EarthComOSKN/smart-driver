import React, { Component } from 'react';
import '../../css/Layout.css';
import '../../css/Card.css';

class Card extends Component {
	constructor() {
		super();
		this.state = { coords: {} };
	}
	async showPosition(position) {
		const { coords } = position;
		// this.setState({coords})
		console.log('coords', coords);
	}
	componentDidMount() {
		const app = document.getElementById('container');
		if (navigator.geolocation) {
			try {
				navigator.geolocation.getCurrentPosition(this.showPosition, this.error);
			} catch (error) {
				console.log(error);
			}
		} else {
			app.innerHTML = 'Geolocation is not supported by this browser.';
		}
	}
	render() {
		const { data, coords } = this.props;
		return (
			<div className="card container p-3" id="container">
				<div className="row">
					<div className="col-7">
						<div className="detail">{data.reciever}</div>
						<div className="detail">{data.address}</div>
						<div className="detail">{data.phone}</div>
					</div>
					<div className="col-3 p-0 d-flex align-items-center justify-content-center">
						<button className="btn btn-orange" data-toggle="modal" data-target="#modal">ส่งงาน</button>
					</div>
					<div className="col-2 p-0 d-flex align-items-center pointer justify-content-center">
						<img
							className="location-icon"
							src="https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-17-32419.png"
							alt="location-icon"
							onClick={() => window.open(`http://maps.google.com?q=48.8583736,2.2922926`)}
						/>
					</div>
				</div>
				<div className="modal" id="#modal" tabindex="-1" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
