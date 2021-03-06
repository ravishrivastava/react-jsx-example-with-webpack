import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';


export default class Layout extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Header />				
				{this.props.children}
				<Footer />
			</div>
		)
	}
}