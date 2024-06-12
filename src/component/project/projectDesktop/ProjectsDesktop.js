import React, { useState, useEffect } from 'react';
import ProjectsData from '../../../asset/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../../iconMap/IconMap';
import ImageCarousel from '../../../scripts/CarrouselProjects';

function Projects({ darkMode }) {
	return (
		<div>
			<section id="projects" className={`projects${darkMode ? ' dark-mode' : ''}`}>
				<h2 className="section-title dark-blue-text section-title-project">Projects</h2>
				<div className="container-project flex center align-center column">
					<div className="project flex center align-center column">
						{ProjectsData.map((project, index) => {
							return (
								<div className="flex row card-project" key={index}>
									<div className="flex column description-project">
										<h1>{project.nom}</h1>
										<p>{project.description}</p>
										<div className="language-icons flex center">
											{(project.langages || []).map((lang, index) => (
												<FontAwesomeIcon key={index} icon={IconMap[lang]} />
											))}
										</div>
										<div className="link flex center align-center row">
											<div className="link-spec">
												<span className="site">Site : </span>
												{project.website && (
													<a href={project.website} target="_blank" rel="noopener noreferrer" className="icons">
														<FontAwesomeIcon icon={IconMap[project.iconSite]} />
													</a>
												)}
											</div>
											<div className="link-spec">
												<span className="site"> GitHub : </span>
												{project.gitHubSite && (
													<a href={project.gitHubSite} target="_blank" rel="noopener noreferrer" className="icons">
														<FontAwesomeIcon icon={IconMap[project.gitHub]} />
													</a>
												)}
											</div>
										</div>
									</div>
									<div className="container-img-project">
										<ImageCarousel images={project.img} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
