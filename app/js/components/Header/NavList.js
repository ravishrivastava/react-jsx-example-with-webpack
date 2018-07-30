import React from 'react';
import { active } from './header.css';
import { Link , IndexLink } from 'react-router';


export default class NavList extends React.Component {
	constructor() {
		super();
	}

	render() {
		let { to } = this.props;
		if( to == '/'){
		  return <IndexLink {...this.props} activeClassName={active} />
		}else{
		  return <Link {...this.props} activeClassName={active} />
		}
	}
}
          // <Link to={this.props.to} children={this.props.children} activeClassName="active" />