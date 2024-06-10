import React, { useEffect } from 'react';
import Buttons from '../component/buttons/Buttons';
import Footer from '../component/footer/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../../src/component/svgComponent/SvgComponent';

function ErrorPage() {
	return (
		<div className="height-full flex column">
			<div className="flex center align-center column height-full">
				<h1 className="title-error">404 Page not found</h1>
				<div className="hero-cta load-hidden">
					<Link className="animated-button" to="/">
						<Buttons message={'Go back Home'} SvgLeft={ArrowLeft} SvgRight={ArrowRight} />
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ErrorPage;
