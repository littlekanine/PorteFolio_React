import React, { useEffect } from 'react';
import initScrollReveal from '../scripts/scrollReveal';
import Herro from '../component/herroBanner/HerroBanner';
import About from '../component/about/About';
import ContactForm from '../component/contactForm/ContactForm';
import CardsStack from '../component/cardsStack/CardsStacks';
import ResponsiveProjects from '../component/project/ResponsiveProjects';
import Footer from '../component/footer/Footer';

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
			<Footer />
		</div>
	);
}

export default Home;
