import React from 'react';
import Button from './Button';
import Timer from './Timer';

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			firstName: 'chris'
		}
	}

	changeName(){
		this.setState({
			firstName: 'jane'
		})
	}

	render(){
		return (
			<div>
				<h1>Welcome to my site!</h1>
				<h2>Happy to have you here :)</h2>
				<h1>{this.state.firstName}</h1>
				<Button firstName={this.state.firstName} changeName={this.changeName.bind(this)} />
				<p>We need some paragraph comtent here for our users</p>
				<Timer />
				<Timer />
				<Timer />
			</div>

		)
	}
}