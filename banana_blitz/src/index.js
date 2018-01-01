import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import App from './App';
import Test from './components/TestComponent/TestComponent.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
			<Route path="/other" component={Test} />
		</div>
	</BrowserRouter>
	, document.getElementById('root')
);
registerServiceWorker();