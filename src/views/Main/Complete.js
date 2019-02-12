import React, { Component } from 'react';
import Card from './Card';
class Complete extends Component {
	constructor() {
		super();
		this.state = { completeTasks: [] };
	}
	componentDidMount() {
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
				isComplete: true,
			},
			{
				receiver: 'ชาณิสสา ตรีทิพไกวัลพร',
				address: '219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150',
				phone: '0837093547',
				isComplete: true,
			},
		];
		const completeTasks = data.filter(e => e.isComplete === true);
		this.setState({ completeTasks });
	}
	render() {
		const {completeTasks} = this.state;
		return (
			<div className="container schedule">
				<div className="row topic">งานที่สำเร็จ</div>
				{
					completeTasks.map((e, index) => {
						return (
							<div className="row" key={index}>
								<div className="col">
									<Card data={e} inProgress={false} isComplete={true}/>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Complete;
