import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import ErrorPage from '../../pages/Error';

function CustomRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}

export default CustomRoutes;
