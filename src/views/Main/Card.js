import React, { Component } from "react";
import Swal from "sweetalert2";
import "../../css/Layout.css";
import "../../css/Card.css";
import axios from "axios";
import { config } from "../../config";





class Card extends Component {
  constructor() {
    super();
    this.state = { coords: {} };
  }
	sendData() {}
  async confirmModal() {
		await this.getLocation();
		const { data } = this.props;
		Swal.fire({
			title: 'ยืนยันการทำงาน',
			text: `${data.CustName + ' ' + data.Address}`,
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: 'rgb(236,86,50)',
			cancelButtonColor: 'rgb(129,129,129)',
			confirmButtonText: 'ยืนยัน',
			cancelButtonText: 'ยกเลิก',
			reverseButtons: true,
			showLoaderOnConfirm: true,
			allowOutsideClick: () => !Swal.isLoading(),
			preConfirm: async () => {
				const { coords } = this.state;
				try {
					const driverProfile = {
						p_JobOrder: data.JobOrdNo,
						p_SeqNo: data.SeqNo,
						p_TruckID: data.TuckID, //should be TruckID ?
						p_CustCode: data.CustCode,
						p_Latitude: coords.latitude,
						p_Longitude: coords.longitude,
						p_CnfDate: new Date(Date.now()),
						p_SyUser: data['diffgr:id'],
					};
					console.log(driverProfile);
					await axios.post(`${config.url}/submitJob`, driverProfile);
				} catch (error) {
					console.log(error);
				}

			},
		}).then(result => {
			if (result.value) {
				Swal.fire({
					title: 'ดำเนินการสำเร็จ',
					type: 'success',
					confirmButtonColor: 'rgb(236,86,50)',
				});
			} else {
				Swal.fire({});
			}
		});
	}
	getLocation() {
		const app = document.getElementById('container');
		if (navigator.geolocation) {
			try {
				navigator.geolocation.getCurrentPosition(async position => {
					const { coords } = position;
					await this.setState({ coords });
				}, this.getLocationerror);
			} catch (error) {
				console.log(error);
			}
		} else {
			app.innerHTML = 'Geolocation is not supported by this browser.';
		}
	}
	getLocationerror(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	render() {
		const { data, inProgress, isComplete } = this.props;
		return (
			<div className="card container p-3" id="container">
				<div className="row">
					<div className="col-8">
						<div className="detail">
							<span className="font-weight-bold">ผู้รับ :</span>&nbsp;{data.CustName}
						</div>
						<div className="detail">
							<span className="font-weight-bold">ที่อยู่ :</span>&nbsp;{data.Address}
						</div>
						<div className="detail">
							<span className="font-weight-bold">รหัสของผู้รับ :</span>&nbsp;{data.CustCode}
						</div>
					</div>
					<div className="col-2 p-0 d-flex align-items-center justify-content-center">
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
					{isComplete ? (
						<div className="col-2 p-0 d-flex flex-column align-items-center justify-content-center">
							<i class="fas fa-check-circle" />
							<div className="finish-text">สำเร็จเมื่อ 8:00 น.</div>
						</div>
					) : (
						<div className="col-2 p-0 d-flex align-items-center pointer justify-content-center">
							<img
								className="location-icon"
								src="https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-17-32419.png"
								alt="location-icon"
								onClick={() => window.open(`http://maps.google.com?q=${data.Address}`)}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Card;
