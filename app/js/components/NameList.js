import React from 'react';

export default class NameList extends React.Component {
	constructor(){
		super();
		this.state = {
			names: [],
			event: 'no event detected.'
		}
		this.handleClick = this.handleClick.bind(this);
		this.nameFilter = this.nameFilter.bind(this);
	}

	componentWillMount(){
		this.setState({
			names: this.props.names
		})
	}

	handleClick(event){
		event.preventDefault();
		this.setState({
			event: event.type
		})
	}

	nameFilter(event){
		let newNames = this.state.names.filter((name) => {
			let full_name = `${name.first_name} ${name.last_name}`;
			return full_name.toLowerCase().includes(event.target.value.toLowerCase())
		})
		this.setState({
			names: newNames
		})
	}

	render(){
		let {names} = this.state;
		return(
			<div>
 				<h3>{this.state.event}</h3>
 				<input type="text" 
 				onChange={this.nameFilter}
 				/>
				{ names.map((name) => <h3 key={name.id}><a href='#' onClick={this.handleClick}>{name.first_name} {name.last_name}</a></h3>)}
			</div>
		)
	}

}