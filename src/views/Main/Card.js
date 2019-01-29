import React, { Component } from 'react';
import Swal from 'sweetalert2';
import '../../css/Layout.css';
import '../../css/Card.css';
import axios from 'axios';

class Card extends Component {
	constructor() {
		super();
		this.state = { coords: {} };
	}
	sendData() {}
	confirmModal() {
		const {data} = this.props;
		Swal.fire({
			title: 'ยืนยันการทำงาน',
			text: `${data.receiver,data.address,data.phone}`,
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: 'linear-gradient(to right,rgb(237,101,43) , rgb(233,46,0))',
			cancelButtonColor: 'rgb(129,129,129)',
			confirmButtonText: 'เย่',
			reverseButtons: true,
			showLoaderOnConfirm: true,
			allowOutsideClick: () => !Swal.isLoading(),
			preConfirm: async (data) => {
				const res = await axios.get('https://api.chucknorris.io/jokes/random')
				console.log(res);
				console.log(data);
				console.log('state',this.state);
				return res.data.value
			}
		}).then(result => {
			if (result.value) {
				console.log(result);
				Swal.fire('ดำเนินการสำเร็จ!', result.value, 'success');
			}
		});
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
						<div className="detail">{data.receiver}</div>
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
								onClick={() => this.confirmModal()}
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
			</div>
		);
	}
}

export default Card;
