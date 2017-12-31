import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {BrowserRouter, Link, Route } from 'react-router-dom';
// import Routes from './routes';
import Test from './components/Test/Test';
import Player from './components/Player/Player';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={Test} />
			<Route path="/other" component={Player} />
		</div>
	</BrowserRouter>, 
	document.getElementById('root')
);
registerServiceWorker();
