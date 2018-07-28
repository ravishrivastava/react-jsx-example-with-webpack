import React from 'react';
import { Link } from 'react-router';
import names from '../../../../mock-data';

export default class NameProfile extends React.Component {
	constructor(){
		super();
	}

	componentWillMount(){
		let { id } = this.props.params;
		this.user = names.find((name) =>
			name.id === +id
		)
		console.log(this.result);
	}

	render(){
		let user = this.user;
		if( user ){
			user = 
			  <div>
			  	 <h2> {user.first_name} {user.last_name} </h2>
			  	 <p>lives in {user.city} and can be reached by <a href={`mailto:${user.email}`}>email </a></p>
			  	 <p>{user.first_name} loves yo say: "{user.catch_phrase}"</p>
			  </div>
		}else {
			user =  <h2> Sorry , didn't find the user :( </h2>
		}
		
		return(
			<div>
				{ user }
				<Link to="/names"><button > Go to all names</button></Link>
			</div>
		)
	}
}