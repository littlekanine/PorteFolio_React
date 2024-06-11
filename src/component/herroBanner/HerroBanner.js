import React from 'react';
import { Moon, Sun } from '../svgComponent/SvgComponent';
import Buttons from '../buttons/Buttons';
import { ArrowLeft, ArrowRight } from '../svgComponent/SvgComponent';

function Herro({ darkMode, toggleDarkMode }) {
	return (
		<div>
			<section id="hero" className={`jumbotron ${darkMode ? 'dark-mode' : ''}`}>
				<div className="animated-button toggle-button" onClick={toggleDarkMode}>
					<button id="toggle-button" className="flex align-center center" aria-label="button dark mode">
						{darkMode ? <Sun /> : <Moon />}
					</button>
				</div>
				<div className="container">
					<h1 className="hero-title load-hidden">
						Welcome.
						<br />
						My name is <span className="text-color-main">Elia Kopff</span>
						<br />
						I'm a Web Developer.
					</h1>
					<div className="hero-cta load-hidden">
						<a rel="noreferrer" className={`animated-button ${darkMode ? 'dark-mode' : ''}`} href="#about">
							<Buttons message={'Know more'} SvgLeft={ArrowLeft} SvgRight={ArrowRight} darkMode={darkMode} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Herro;
