import Buttons from '../buttons/Buttons';
import { ArrowLeft, ArrowRight, Enveloppe } from '../svgComponent/SvgComponent';

function ContactForm() {
	return (
		<div>
			<section id="contact">
				<div class="form-container">
					<h2>Contact</h2>
					<form action="/submit-form" method="post" className="form">
						<div className="name-form">
							<div class="form-group">
								<label for="first-name">First Name:</label>
								<input type="text" id="first-name" name="first_name" required></input>
							</div>
							<div class="form-group">
								<label for="last-name">Last Name:</label>
								<input type="text" id="last-name" name="last_name" required></input>
							</div>
						</div>
						<div class="form-group title">
							<label for="title">Title:</label>
							<input type="text" id="title" name="title" required></input>
						</div>
						<div class="form-group">
							<label for="message">Message:</label>
							<textarea id="message" name="message" required></textarea>
						</div>
						<div class="form-button hero-cta load-hidden">
							<a rel="noreferrer" class="animated-button" href="#about">
								<Buttons message={'Send'} SvgRight={ArrowRight} Enveloppe={Enveloppe} />
							</a>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export default ContactForm;
