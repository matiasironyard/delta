import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { ContextProvider } from './components/synergy/synergy';

import Layout from './components/layout/index';
import Posts from './components/posts/index';
import PostDetails from './components/post-details/index';
import UserDetails from './components/user-details/index';
import Users from './components/users/index';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default function App() {
	return (
		<Router>
			<Switch>
				<ContextProvider>
					<Layout>
						<Switch>
							<Route exact path='/posts'>
								<Posts />
							</Route>
							<Route exact path='/posts/:id'>
								<PostDetails />
							</Route>
							<Route exact path='/users'>
								<Users />
							</Route>
							<Route exact path='/users/:id'>
								<UserDetails />
							</Route>
							<Redirect from='/' to='posts' />
						</Switch>
					</Layout>
				</ContextProvider>
			</Switch>
		</Router>
	);
}
