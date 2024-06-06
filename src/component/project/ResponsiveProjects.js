import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './projectDesktop/ProjectsDesktop';
import MobileProjects from './projectMobile/ProjectMobile';

function ResponsiveProjects() {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	console.log('size', isDesktopOrLaptop, isTabletOrMobile);

	return (
		<div>
			{isDesktopOrLaptop && <DesktopProjects />}
			{isTabletOrMobile && <MobileProjects />}
		</div>
	);
}

export default ResponsiveProjects;
