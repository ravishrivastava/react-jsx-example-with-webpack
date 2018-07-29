import React from 'react';
import NavList from './NavList';


export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		  return(
		    <div className="pure-menu pure-menu-horizontal">
		    <NavList to="/" className="pure-menu-heading pure-menu-link"> Home </NavList>
	   	 		<ul className="pure-menu-list">
					<li className="pure-menu-item"><NavList to="/products" className="pure-menu-link">Product List</NavList></li>
					<li className="pure-menu-item"><NavList to="/names" className="pure-menu-link">Name List</NavList></li>
				</ul>
		    </div>
		  )
	}
}


<div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="#" >News</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
    </ul>
</div>