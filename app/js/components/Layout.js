import React from 'react';
import { Link , IndexLink } from 'react-router';


export default class Layout extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<header>
					<h1>Welcome to my site!</h1>
					<h3>I am inside the header</h3>
					<ul>
						<li><IndexLink to="/" activeClassName="active" > Home </IndexLink></li>
						<li><Link to="/timer" activeClassName="active" >Timer</Link></li>
						<li><Link to="/names" activeClassName="active" >Name List</Link></li>
					</ul>
				</header>
					{this.props.children}
				<footer>
					<h5>I am the footer</h5>
				</footer>
			</div>

		)
	}
}