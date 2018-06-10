import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {
	render(){	
		return(
			<div>
				<h2>The top level Component passed this message along: {this.props.originalPhrase}</h2>
				<h4>Welcome to my site, {this.props.firstName}</h4>
				<h4>Content {this.props.lastName}</h4>
			</div>
		)
	}
}

const lengthChecker = ((props, propName , component) => {
	if(props[propName]){
		let val = props[propName]
		if(typeof val === 'string'){
			return val.length >= 5 ? null : new Error(`${propName} in ${component} is too short.`)
		}
	}
}) 

Welcome.propTypes = {
	firstName: lengthChecker,
	lastName: PropTypes.string,
	originalPhrase: PropTypes.string.isRequired
}

Welcome.defaultProps = {
	originalPhrase: "I am missing :("
}