import React from 'react';

export default class NameRow extends React.Component {
	constructor(){
		super();
	}

	render(){
		let {first_name} = this.props.name;
		let {last_name} = this.props.name;
		return(
            <h3 ><a href='#' onClick={this.handleClick}>{first_name} {last_name}</a></h3>
		)
	}
}