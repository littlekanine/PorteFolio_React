import Buttons from '../buttons/Buttons';
import { ArrowLeft, ArrowRight } from '../svgComponent/SvgComponent';

function Herro() {
	return (
		<div>
			<section id="hero" class="jumbotron">
				<div class="container">
					<h1 class="hero-title load-hidden">
						Welcom.
						<br />
						My name is <span class="text-color-main">Elia Kopff</span>
						<br />
						I'm Web Develloper.
					</h1>
					<div class="hero-cta load-hidden">
						<a rel="noreferrer" class="animated-button" href="#about">
							<Buttons message={'Know more'} SvgLeft={ArrowLeft} SvgRight={ArrowRight} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Herro;
