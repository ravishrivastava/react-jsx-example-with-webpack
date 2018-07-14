import React from 'react';
import Button from './Button';
import Timer from './Timer';

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			firstName: 'chris',
			isTimerMounted: true
		}
	}

	changeName(){
		this.setState({
			firstName: 'jane'
		})
	}

	toggleTimers(){
		this.setState( prevState => ({
			isTimerMounted: !prevState.isTimerMounted
		}))
	}

	render(){
		return (
			<div>
				<h1>Welcome to my site!</h1>
				<h2>Happy to have you here :(</h2>
				<h1>{this.state.firstName}</h1>
				<Button firstName={this.state.firstName} changeName={this.changeName.bind(this)} />
				<p>We need some paragraph comtent here for our users</p>
				{ this.state.isTimerMounted ?
					<div>
						<Timer />
						<Timer />
						<Timer />
					</div> 
					: null
				}
				
				<button onClick={this.toggleTimers.bind(this)} > Toggle Timers </button>
			</div>

		)
	}
}