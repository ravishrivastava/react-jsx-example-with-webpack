import React from 'react';
import NavList from './NavList';


export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		  return(
		    <div>
	   	 		<ul>
					<li><NavList to="/" > Home </NavList></li>
					<li><NavList to="/products">Product List</NavList></li>
					<li><NavList to="/names">Name List</NavList></li>
				</ul>
		    </div>
		  )
	}
}
