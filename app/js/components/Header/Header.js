import React from 'react';
import NavList from './NavList';
import styles from './header.css';


export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		  return(
		    <div className={`pure-menu pure-menu-horizontal ${styles.nav}`}>
		    <NavList to="/" className="pure-menu-heading pure-menu-link"> Home </NavList>
	   	 		<ul className="pure-menu-list">
					<li className="pure-menu-item"><NavList to="/products" className="pure-menu-link">Product List</NavList></li>
					<li className="pure-menu-item"><NavList to="/names" className="pure-menu-link">Name List</NavList></li>
				</ul>
		    </div>
		  )
	}
}