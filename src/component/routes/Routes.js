import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';

function Routes() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
}

export default Routes;
