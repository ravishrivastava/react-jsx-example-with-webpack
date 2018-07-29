import React from 'react';
import styles from './namelist.css';
import { Link } from 'react-router';

export default class NameRow extends React.Component {
	constructor(){
		super();
	}

	render(){
		let {id, first_name , last_name} = this.props.name;
		return(
            <div className={`pure-u-1 pure-u-md-1-3 ${styles.aquamarineBackground}`}>
	            <h3 className={styles.name} >
	            	<Link to={`/names/${id}`}>{first_name} {last_name}</Link>
	            </h3>
            </div>
		)
	}
}