import React from 'react';

import Timer from './Timer';
import FilterableNameList from './FilterableNameList';


export default class Layout extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>Welcome to my site!</h1>
				<h3>Happy to have you here :( </h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar nulla et quam euismod, quis commodo ligula lobortis. Etiam finibus, metus vel semper varius, ligula ex tristique ligula, sed porta sem sapien at eros.</p>
				<Timer />
				<FilterableNameList names={this.props.names}/>
			</div>
		)
	}
}