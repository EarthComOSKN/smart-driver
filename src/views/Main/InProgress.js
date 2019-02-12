import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import '../../css/Layout.css';

class InProgress extends Component {
	constructor(props) {
		super(props);
		this.state = { completeTasks: [], inprogressTasks:[] };
	}

	async componentDidMount() {
		// const data = await axios.get("http://iworks.ddns.net:8080/IW_ServiceTMS/IW_AppServer.asmx/Get_JobOrder?pTruckID=5JB1288");
		// console.log(data);
		const data = [
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร1',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: false,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร2',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: false,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร3',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: false,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร4',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: false,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: false,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: true,
			},
		];
		const completeTasks = data.filter(e => e.isComplete === true)
		const inprogressTasks = data.filter(e => e.isComplete === false)
		this.setState({ completeTasks,inprogressTasks });
		// const values = queryString.parse(this.props.location.search)
		// console.log(values);
	}

	render() {
		const { inprogressTasks,completeTasks } = this.state;
		return (
			<div className="container schedule">
				<div className="row topic">กำลังดำเนินการ</div>
				{
					inprogressTasks.map((e, index) => {
						
							return (
								<div className="row" key={index}>
									<div className="col">
										<Card data={e} inProgress={true} />
									</div>
								</div>
							);
					})[0]
				}
				<div className="row d-flex justify-content-between topic">
					<div>ตารางงาน</div>
					<div>0/14 สำเร็จ</div>
				</div>
				{inprogressTasks.map((e, index) => {
					return (
						<div className="row" key={index}>
							<div className="col">
								<Card data={e} inProgress={false} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default InProgress;
