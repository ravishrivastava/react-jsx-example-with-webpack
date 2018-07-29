import React from 'react';
import PRODUCTS from '../../../../mock-products';

export default class ProductProfile extends React.Component {

	constructor(){
		super();
	}

	componentWillMount(){
		let productId = +this.props.params.id;
		this.product = PRODUCTS.find((product) =>
			product.id === productId
		)
	}

	render(){
		let style = {
			borderRadius: '50%'
		}
		let {
    	  productName, 
    	  productAdjective, 
    	  productMaterial, 
    	  color, 
    	  price, 
    	  text, 
    	  image 
    	   } = this.product;
		return(
			<div>
				The <strong>{productName}</strong> has a wonderful {color} color, with inspired {productAdjective} {productMaterial} properties. 
				<p>{text}</p>
				<img style={style} src={image}/>
			</div>
		)
	}
}