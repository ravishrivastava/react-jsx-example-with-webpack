import React from 'react';
import { Link } from 'react-router';


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
						<li><Link to="/" >Home</Link></li>
						<li><Link to="/timer" >Timer</Link></li>
						<li><Link to="/namelist" >Name List</Link></li>
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