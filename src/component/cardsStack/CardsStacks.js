import React from 'react';
import skillsData from '../../asset/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../iconMap/IconMap';
import getProgressWidth from './progressBar/ProgressBar';

function CardsStack() {
	const chunkArray = (array, size) => {
		const chunkedArr = [];
		let index = 0;
		while (index < array.length) {
			chunkedArr.push(array.slice(index, size + index));
			index += size;
		}
		return chunkedArr;
	};

	const chunkedSkills = chunkArray(skillsData, 3);

	return (
		<div>
			<section className="card-section">
				<h1 className="section-title">Skills</h1>
				{chunkedSkills.map((row, rowIndex) => (
					<div className="card-stack about-wrapper__image load-hidden" key={rowIndex}>
						{row.map((skill, index) => (
							<div className="card-contain " key={index}>
								<div className="card">
									<h2 className="title-stack">{skill.nom}</h2>
									<FontAwesomeIcon key={index} icon={IconMap[skill.logo]} className="icons-skill " />
									<div className="progress-bar">
										<div className="progress" style={{ width: getProgressWidth(skill.niveaux) }}></div>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</section>
		</div>
	);
}

export default CardsStack;