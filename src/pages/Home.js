import React, { useEffect } from 'react';
import initScrollReveal from '../scripts/scrollReveal';
import Herro from '../component/herroBanner/HerroBanner';
import Pdp from '../asset/img/mwa.jpg';
import Projects from '../component/project/Projects';
import CardsStack from '../component/cardsStack/CardsStacks';

function Home() {
	useEffect(() => {
		initScrollReveal();
	}, []);
	return (
		<div>
			<div id="top"></div>
			<Herro />
			<section id="about">
				<div className="container">
					<div className="row about-wrapper">
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__image load-hidden">
								<img src={Pdp} alt="Profile Image" className="img-fluid rounded shadow-lg" height="auto" width="300px" />
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__info load-hidden">
								<p className="about-wrapper__info-text">
									Former bartender, I chose to reorient myself after seven years of service.
									<br />I want to create, improve, undertake.
								</p>
								<p className="about-wrapper__info-text">Curiosity brings knowledge</p>
								<div className="social-links">
									<a
										href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"
										target="_blank"
									>
										<i className="fab fa-linkedin fa-inverse icon"></i>
									</a>
									<a href="https://github.com/littlekanine">
										<i className="fab fa-brands fa-github icon"></i>
									</a>
									<a href="https://x.com/K_D3828">
										<i className="fab fa-brands fa-x-twitter icon"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Projects />
			<CardsStack />

			<section id="contact">
				<div className="container">
					<h2 className="section-title">Contact</h2>
					<div className="contact-wrapper load-hidden">
						<p className="contact-wrapper__text">[Put your call to action here]</p>
						<a rel="noreferrer" target="_blank" className="cta-btn cta-btn--resume" href="mailto:example@email.com">
							Call to Action
						</a>
					</div>
				</div>
			</section>

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
