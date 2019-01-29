import React,{Component} from 'react';

class Complete extends Component {
    constructor() {
        super();
        this.state = {}
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
    }
    render() {
        return (<div>

        </div>)
    }
}

export default Complete