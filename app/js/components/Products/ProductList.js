import React from 'react';
import PRODUCTS from '../../../../mock-products';
import styles from './products.css';
import ProductRow from './ProductRow';

export default class ProductList extends React.Component {

	constructor(){
		super();
		this.state = {
			product: []
		}
	}

	componentWillMount(){
		this.setState({
			products: PRODUCTS
		})
	}

	render(){
		console.log(styles);
		let { products } = this.state;
		return(
			<div className={`pure-g ${styles.placeholder}`}>
				{ products.map((product) => 
					<ProductRow key={product.id} product={product} />
				)}
			</div>
		)
	}
}