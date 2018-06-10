import React from 'react';

export default class Timer extends React.Component {
	constructor(){
		super();
		this.state = {
			time: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		setInterval(() => {
			this.setState(prevState => ({
				time: prevState.time += 1
			}))
		},1000)
	}

	render(){
		return(
			<div>
				<h1>I've been running for {this.state.time} seconds.</h1>
				<button onClick={this.handleClick}>Click to start</button>
			</div>
		)
	}
}