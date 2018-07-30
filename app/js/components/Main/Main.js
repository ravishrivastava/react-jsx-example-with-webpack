import React from 'react';
import { Link } from 'react-router';
import styles from './main.css';
import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../../../../mock-products';

export default class Main extends React.Component {
	constructor(){
		super();
	}
	render(){
		let randomProduct = Math.floor(Math.random() * PRODUCTS.length);
		const  { background, header, divider } = styles;
		return(
			<div>
				<div className={background}></div>
				<div className={header}>
					<h2>Iresf flondd loren isef</h2>
					<ul>
						<li>dsfjdsl dfdks </li>
						<li>dfds ertryrt</li>
						<li> gfghsd yt[potpgre</li>
						<li> rfeqw fgfdgf</li>
					</ul>
				</div>
				<div className={divider}></div>
				<Link to={`/products/${randomProduct}`}><ProductProfile id={randomProduct} /></Link>
				<p> cfsd sdf sd sdf sdfds d dfsdf dfds sd fsdf sdfsd df wefe woireoiweowe dfdsfsd</p>
				<div className={divider}></div>

			</div>  
		)
	}
}