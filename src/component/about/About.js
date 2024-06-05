import Pdp from '../../asset/img/mwa.jpg';

function About() {
	return (
		<div>
			<section id="about">
				<div className="container">
					<div className="row about-wrapper">
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__image load-hidden">
								<img src={Pdp} alt="Elia Kopff" className="img-fluid rounded shadow-lg" />
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="about-wrapper__info load-hidden">
								<p className="about-wrapper__info-text">
									Former bartender, I chose to reorient myself after seven years of service.
									<br />I want to create, improve, undertake.
								</p>
								<p className="about-wrapper__info-text">Curiosity brings knowledge</p>
								<div className="social-links about-wrapper__link">
									<a href="https://www.linkedin.com/in/elia-kopff-16064b228/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr">
										<span className="text-hidden">Lien linkedin</span>
										<i className="fab fa-linkedin fa-inverse icon"></i>
									</a>
									<a href="https://github.com/littlekanine">
										<span className="text-hidden">Lien GitHub</span>
										<i className="fab fa-brands fa-github icon"></i>
									</a>
									<a href="https://x.com/K_D3828">
										<span className="text-hidden">Lien X</span>
										<i className="fab fa-brands fa-x-twitter icon"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;