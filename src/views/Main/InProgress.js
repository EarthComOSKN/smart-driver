import React, { Component } from 'react';
import convert from 'xml-js';
import Card from './Card';
import '../../css/Layout.css';
import axios from 'axios';

class InProgress extends Component {
	constructor(props) {
		super(props);
		this.state = { inprogressTasks: [], currentTask: {} };
	}

	componentDidMount() {
		// const data = await axios.get('http://203.195.103.19/IW_ServiceTMS/IW_AppServer.asmx/Get_JobOrder?pTruckID=5JB1288');
		const tmp = {
			DataSet: {
				schema: {
					element: {
						complexType: {
							choice: {
								element: {
									complexType: {
										sequence: {
											element: [
												{
													_name: 'JobOrdNo',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'SeqNo',
													_type: 'xs:short',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'TuckID',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'CustCode',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'CustName',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'Address',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'ConfDate',
													_type: 'xs:dateTime',
													_minOccurs: '0',
													__prefix: 'xs',
												},
												{
													_name: 'status',
													_type: 'xs:string',
													_minOccurs: '0',
													__prefix: 'xs',
												},
											],
											__prefix: 'xs',
										},
										__prefix: 'xs',
									},
									_name: 'joborddtl1',
									__prefix: 'xs',
								},
								_minOccurs: '0',
								_maxOccurs: 'unbounded',
								__prefix: 'xs',
							},
							__prefix: 'xs',
						},
						_name: 'NewDataSet',
						'_msdata:IsDataSet': 'true',
						'_msdata:UseCurrentLocale': 'true',
						__prefix: 'xs',
					},
					_xmlns: '',
					'_xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
					'_xmlns:msdata': 'urn:schemas-microsoft-com:xml-msdata',
					_id: 'NewDataSet',
					__prefix: 'xs',
				},
				diffgram: {
					NewDataSet: {
						joborddtl1: [
							{
								JobOrdNo: 'J201901-00001',
								SeqNo: '1',
								TuckID: '5JB1288',
								CustCode: 'LR0079',
								CustName: 'Toyota Motor Asia Pacific Engineering & Manufacturing Co., Ltd',
								Address: '99 Moo 5, T.Ban-Ragad, A.Bang Bor, SAMUTPRA Thailand 10560',
								status: 'A',
								'_diffgr:id': 'joborddtl11',
								'_msdata:rowOrder': '0',
							},
							{
								JobOrdNo: 'J201901-00001',
								SeqNo: '2',
								TuckID: '5JB1288',
								CustCode: 'LP0192',
								CustName: 'Darmex Petroleum (Thailand) Corp.',
								Address: '3313/4 , Huamark, Bangpaki BANGKOK Thailand 10240',
								status: 'A',
								'_diffgr:id': 'joborddtl12',
								'_msdata:rowOrder': '1',
							},
							{
								JobOrdNo: 'J201901-00001',
								SeqNo: '3',
								TuckID: '5JB1288',
								CustCode: 'LR0107-1',
								CustName: 'Tri Petch Isuzu Sales Co., Ltd.',
								Address:
									'88/1-6 Romklao Rd., Minburi Subdistrict,Minburi District, BANGKOK Thailand 10510',
								status: 'A',
								'_diffgr:id': 'joborddtl13',
								'_msdata:rowOrder': '2',
							},
						],
						_xmlns: '',
					},
					'_xmlns:msdata': 'urn:schemas-microsoft-com:xml-msdata',
					'_xmlns:diffgr': 'urn:schemas-microsoft-com:xml-diffgram-v1',
					__prefix: 'diffgr',
				},
				_xmlns: 'http://tempuri.org/',
			},
		};
		let data = tmp.DataSet.diffgram.NewDataSet.joborddtl1;
		const currentTask = data.shift(0, 1);
		this.setState({ inprogressTasks: data, currentTask });
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
					<div>0/14 สำเร็จ</div>
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
