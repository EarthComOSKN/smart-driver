import React, { Component } from 'react';

import Card from './Card';
import '../../css/Layout.css';

class InProgress extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	componentDidMount() {
		
		// const data = await axios.get("https://reqres.in/api/unknown");
		const data = [
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร1',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร2',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร3',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร4',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
			{
				reciever: 'ชาณิสสา ตรีทิพไกวัลพร',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
			},
		];
		this.setState({ data });
		// const values = queryString.parse(this.props.location.search)
		// console.log(values);
	}

	render() {
		const { data } = this.state;
		return (
			<div className="container schedule">
				<div className="row topic">กำลังดำเนินการ</div>
				{data.map((e, index) => {
					return (
						<div className="row" key={index}>
							<div className="col">
								<Card data={e} inProgress={true}/>
							</div>
						</div>
					);
				})[0]}
				<div className="row d-flex justify-content-between topic">
					<div>ตารางงาน</div>
          <div>0/14 สำเร็จ</div>
				</div>
				{data.map((e, index) => {
					return (
						<div className="row" key={index}>
							<div className="col">
								<Card data={e} inProgress={false}/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default InProgress;
