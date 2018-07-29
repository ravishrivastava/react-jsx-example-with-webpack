import React from 'react';
import { Link } from 'react-router';
import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../../../../mock-products';

export default class Main extends React.Component {
	constructor(){
		super();
	}
	render(){
		let randomProduct = Math.floor(Math.random() * PRODUCTS.length);
		return(
			<div>
				<h2>Iresf flondd loren isef</h2>
				<ul>
					<li>dsfjdsl dfdks </li>
					<li>dfds ertryrt</li>
					<li> gfghsd yt[potpgre</li>
					<li> rfeqw fgfdgf</li>
				</ul>
				<Link to={`/products/${randomProduct}`}><ProductProfile id={randomProduct} /></Link>
			</div>  
		)
	}
}