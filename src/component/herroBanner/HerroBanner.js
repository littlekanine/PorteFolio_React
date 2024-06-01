import Buttons from '../buttons/Buttons';

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
					<p class="hero-cta load-hidden">
						<a rel="noreferrer" class="animated-button" href="#about">
							<Buttons />
						</a>
					</p>
				</div>
			</section>
		</div>
	);
}

export default Herro;
