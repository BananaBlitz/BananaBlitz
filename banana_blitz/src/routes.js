import React from 'react';
import {Router, Route} from 'react-router';

import Test from './components/Test/Test';
import Player from './components/Player/Player';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={Test} />
		<Route path="/other" component={Player} />

	</Router>
); 

export default Routes;