import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import { config } from '../../config';
import '../../css/Layout.css';

class InProgress extends Component {
	constructor(props) {
		super(props);
		this.state = { inprogressTasks: [], currentTask: {} };
	}

	async componentDidMount() {
		const userId = localStorage.getItem('user');
		const res = await axios.get(`${config.url}/getJobById/` + userId);
		let { data } = res;
		const allTask = data.sort((a, b) => {
			return a.SeqNo > b.SeqNo;
		});

		console.log(allTask);

		// let data = tmp.DataSet.diffgram.NewDataSet.joborddtl1;
		const currentTask = allTask.shift(0, 1);
		this.setState({ inprogressTasks: allTask, currentTask });
		console.log('inprogress', data, 'current', currentTask);
		// const values = queryString.parse(this.props.location.search)
		// console.log(values);
	}

	render() {
		const { inprogressTasks, currentTask } = this.state;
		return (
			<div className="container schedule">
				<div className="row topic">กำลังดำเนินการ</div>
				<div className="row" key={currentTask.SeqNo}>
					<div className="col">
						<Card data={currentTask} inProgress={true} />
					</div>
				</div>
				<div className="row d-flex justify-content-between topic">
					<div>ตารางงาน</div>
					<div>เหลือ&nbsp;{inprogressTasks.length}&nbsp;งาน</div>
				</div>
				{inprogressTasks.map((e, index) => {
					return (
						<div className="row" key={index}>
							<div className="col">
								<Card data={e} inProgress={false} isComplete={false} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default InProgress;
