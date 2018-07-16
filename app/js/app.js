import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout';
import Timer from './components/Timer';
import FilterableNameList from './components/FilterableNameList';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={Layout} >
			<Route path="timer" component={Timer} />
			<Route path="namelist" component={FilterableNameList} />
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);






