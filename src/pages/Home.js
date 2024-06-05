import React, { useEffect } from 'react';
import initScrollReveal from '../scripts/scrollReveal';
import Herro from '../component/herroBanner/HerroBanner';
import About from '../component/about/About';
// import Projects from '../component/project/projectDesktop/Projects';
import ContactForm from '../component/contactForm/ContactForm';
import CardsStack from '../component/cardsStack/CardsStacks';
import ResponsiveProjects from '../component/project/ResponsiveProjects';

function Home() {
	useEffect(() => {
		initScrollReveal();
	}, []);
	return (
		<div>
			<div id="top"></div>
			<Herro />
			<About />
			<ResponsiveProjects />
			<CardsStack />
			<ContactForm />

			<footer className="footer navbar-static-bottom">
				<div className="container">
					<p className="footer__text">
						<a rel="noreferrer" href="https://github.com/littlekanine" target="_blank">
							Elia Kopff
						</a>
					</p>
					<p className="footer__text">2024</p>
				</div>
			</footer>
		</div>
	);
}

export default Home;
