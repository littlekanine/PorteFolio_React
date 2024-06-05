import Buttons from '../buttons/Buttons';
import { ArrowLeft, ArrowRight } from '../svgComponent/SvgComponent';

function Herro() {
	return (
		<div>
			<section id="hero" className="jumbotron">
				<div className="container">
					<h1 className="hero-title load-hidden">
						Welcom.
						<br />
						My name is <span className="text-color-main">Elia Kopff</span>
						<br />
						I'm Web Develloper.
					</h1>
					<div className="hero-cta load-hidden">
						<a rel="noreferrer" className="animated-button" href="#about">
							<Buttons message={'Know more'} SvgLeft={ArrowLeft} SvgRight={ArrowRight} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Herro;
