import React from 'react';
import Welcome from './Welcome';

export default class NameList extends React.Component {
	
	nameMapper(nameArray){
		return nameArray.map((name,i) =>
			<li key={i}>{name}</li>
		)
	}

	render(){
		const nameArray = ["chris123", "John", "Bob", "Mary"];
		return(
			<div>
				<h3>I am number {this.props.number}</h3>
				<Welcome firstName="Jeetu" lastName="Shrivastava" originalPhrase={this.props.number}/>
				<ul>
				{ this.nameMapper(nameArray) }
				</ul>
				<Welcome firstName="Jeetu" lastName="Shrivastava"/>
			</div>
		)
	}
}

