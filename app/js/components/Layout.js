import React from 'react';
import NavList from './NavList';


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
						<li><NavList to="/" > Home </NavList></li>
						<li><NavList to="/timer">Timer</NavList></li>
						<li><NavList to="/names">Name List</NavList></li>
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