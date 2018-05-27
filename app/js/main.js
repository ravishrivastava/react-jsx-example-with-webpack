import React from 'react';
import ReactDom from 'react-dom';

const Welcome = ((props) => {
	return(
		<div>
			<h4>Welcome to my site, {props.firstName}</h4>
			<h4>Content {props.lastName}</h4>
		</div>
	)
})

const App = (() => {
	const nameArray = ["chris", "John", "Bob", "Mary"];
	return(
		<div>
			<Welcome firstName="Ravi" lastName="Shrivastava"/>
			<ul>
			{
				nameArray.map((name,i) =>
					<li key={i}>{name}</li>
				)
			}
			</ul>
		</div>
	)
})
ReactDom.render(
	<App/>,
	document.getElementById('app')

)