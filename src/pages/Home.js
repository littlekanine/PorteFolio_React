import React from 'react';
import Herro from '../component/herroBanner/HerroBanner';
import About from '../component/about/About';
import ContactForm from '../component/contactForm/ContactForm';
import CardsStack from '../component/cardsStack/CardsStacks';
import ResponsiveProjects from '../component/project/ResponsiveProjects';
import Footer from '../component/footer/Footer';
import useDarkMode from '../scripts/darkMode';

function Home() {
	const [darkMode, toggleDarkMode] = useDarkMode();

	return (
		<div>
			<div id="top"></div>
			<Herro darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<ResponsiveProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<CardsStack darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Home;
