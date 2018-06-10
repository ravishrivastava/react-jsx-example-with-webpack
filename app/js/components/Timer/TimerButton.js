import React from 'react';

export default class TimerButton extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<button onClick={this.props.handleClick}>{this.props.time > 5 ? 'Time over 5' : 'Time under 5'}</button>
		)
	}
}