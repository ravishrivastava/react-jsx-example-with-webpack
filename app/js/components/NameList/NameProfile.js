import React from 'react';
import names from '../../../../mock-data';

export default class NameProfile extends React.Component {
	constructor(){
		super();
	}

	componentWillMount(){
		let { id } = this.props.params;
		this.user = names.find((name) =>
			name.id === +id
		)
		console.log(this.result);
	}

	render(){
		
		return(
			<div>
			{JSON.stringify(this.props)}
				<h2> {this.user.first_name} {this.user.last_name} </h2>
				Email -
				City -
				Catch Phrase -
			</div>
		)
	}
}