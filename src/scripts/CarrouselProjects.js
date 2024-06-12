import React, { useState } from 'react';

function ImageCarousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Vérifie si images est un tableau avant d'appeler map()
	if (!Array.isArray(images)) {
		// Affiche un message d'erreur si images n'est pas un tableau
		return <div>Error: images is not an array</div>;
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	return (
		<div className="flex center align-center width-full height-full">
			<button onClick={handlePrev}>&#10094;</button>
			<div className="carrousel-img flex center align-center width-full height-full">
				{images.map((image, index) => (
					<img key={index} src={require(`../asset/img/${image}`)} alt="" className={index === currentIndex ? 'img-project' : 'hidden'} />
				))}
			</div>
			<button onClick={handleNext}>&#10095;</button>
		</div>
	);
}

export default ImageCarousel;
