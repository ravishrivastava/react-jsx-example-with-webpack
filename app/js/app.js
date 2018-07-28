import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import Layout from './components/Layout';
import Timer from './components/Timer';
import FilterableNameList from './components/FilterableNameList';
import NameProfile from './components/NameList/NameProfile';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={Layout} >
			<IndexRoute component={Home} />
			<Route path="timer" component={Timer} />
			<Route path="names">
				<IndexRoute component={FilterableNameList} />
				<Route path=":id" component={NameProfile} />
			</Route>
			<Redirect from="users(/:id)" to="names(/:id)" />
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);






