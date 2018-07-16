import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import Layout from './components/Layout';
import Timer from './components/Timer';
import FilterableNameList from './components/FilterableNameList';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={Layout} >
			<IndexRoute component={Home} />
			<Route path="timer" component={Timer} />
			<Route path="namelist" component={FilterableNameList} />
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);






