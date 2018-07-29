import React from 'react';
import PRODUCTS from '../../../../mock-products';
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
		let { products } = this.state;
		return(
			<div>
				{ products.map((product) => 
					<ProductRow key={product.id} product={product} />
				)}
			</div>
		)
	}
}