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
		console.log('coords', coords);
		// this.setState({coords})
		
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
		const { data, inProgress, coords } = this.props;
		return (
			<div className="card container p-3" id="container">
				<div className="row">
					<div className="col-7">
						<div className="detail">{data.reciever}</div>
						<div className="detail">{data.address}</div>
						<div className="detail">{data.phone}</div>
					</div>
					<div className="col-3 p-0 d-flex align-items-center justify-content-center">
						{inProgress && (
							<button
								type="button"
								className="btn btn-orange"
								data-toggle="modal"
								data-target="#confirmModal"
							>
								ส่งงาน
							</button>
						)}
					</div>
					<div className="col-2 p-0 d-flex align-items-center pointer justify-content-center">
						<img
							className="location-icon"
							src="https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-17-32419.png"
							alt="location-icon"
							// onClick={() => window.open(`http://maps.google.com?q=${coords.latitude},${coords.longtitude}`)}
							onClick={() => window.open(`http://maps.google.com?q=48.8583736,2.2922926`)}
						/>
					</div>
				</div>
				<div
					class="modal fade"
					id="confirmModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content modal-border">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									ยืนยันการทำงาน
								</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body d-flex flex-column">
								<div class="pb-3">dfsfsf</div>
								<div class="d-flex justify-content-around">
									<button
										type="button"
										class="btn btn-secondary modal-button-width"
										data-dismiss="modal"
									>
										ยกเลิก
									</button>
									<button type="button" class="btn btn-orange modal-button-width">
										ยืนยัน
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
