import React from 'react';
import ReactDom from 'react-dom';
import NameList from './components/NameList';

class App extends React.Component {

	render(){
		return(
			<div>
				<NameList number='1'/>,
				<NameList number='2'/>
			</div>
		)
	}
}

ReactDom.render(
	<App/>,
	document.getElementById('app')
)