import { targetElements, defaultProps } from '../data/scrollRevealConfig';
import ScrollReveal from 'scrollreveal';

export default function initScrollReveal() {
	if (!targetElements.length) return;

	const sr = ScrollReveal({ reset: false });

	targetElements.forEach(({ element, animation }) => {
		sr.reveal(element, Object.assign({}, defaultProps, animation));
	});
}
