import React, { useEffect } from 'react';
import Pdp from '../../asset/img/mwa2.jpg';

function About({ darkMode }) {
	useEffect(() => {
		console.log('Dark mode is:', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	return (
		<div className={`${darkMode ? ' dark-mode' : ''}`}>
			<section id="about">
				<div className="container">
					<div className="row about-wrapper">
						<div className="col-md-6 col-sm-12 img-about">
							<div className="about-wrapper__image">
								<img src={Pdp} alt="Elia Kopff" className="img-fluid rounded shadow-lg" />
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__info flex center column">
								<p className="about-wrapper__info-text">
									Anciennement barman, j'ai choisi de me réorienter après six ans dans la restauration.
									<p className="about-wrapper__info-text">Je veux créer, améliorer, entreprendre.</p>
								</p>
								<p className="about-wrapper__info-text">
									Je commence à m'entraîner sur le back-end, dans le but de devenir full stack. J'aimerais travailler dans la création
									d'applications
								</p>
								<p className="about-wrapper__info-text">Je suis motivé et attentif. J'ai hâte de collaborer avec vous.</p>
								<p className="about-wrapper__info-text">La curiosité apporte la connaissance</p>
							</div>
						</div>
					</div>
					<div className="social-links about-wrapper__link">
						<a
							href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"
							aria-label="link to my Linkedin account"
						>
							<span className="text-hidden">Lien linkedin</span>
							<i className="fab fa-linkedin fa-inverse icon"></i>
						</a>
						<a href="https://github.com/littlekanine" aria-label="link to my Github">
							<span className="text-hidden">Lien GitHub</span>
							<i className="fab fa-brands fa-github icon"></i>
						</a>
						<a href="https://x.com/K_D3828" aria-label="link to my X account">
							<span className="text-hidden">Lien X</span>
							<i className="fab fa-brands fa-x-twitter icon"></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
