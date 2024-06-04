import React, { useState, useEffect } from 'react';
import ProjectsData from '../../asset/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../iconMap/IconMap';

function Projects() {
	const [expandedProjectId, setExpandedProjectId] = useState(null);

	const handleProjectClick = (projectId) => {
		setExpandedProjectId(projectId);
	};

	const handleClickOutside = (event) => {
		const project = document.querySelector(`.item.clicked`);
		const projectInfo = document.querySelector(`.project-info`);
		const projectInfoLeft = document.querySelector(`.project-info-left`);
		if (project && !project.contains(event.target)) {
			project.classList.remove('clicked', 'expanded');
			setExpandedProjectId(null);
			projectInfo.classList.add('hidden');
			projectInfoLeft.classList.add('hidden');
		}
	};

	useEffect(() => {
		if (expandedProjectId !== null) {
			const project = document.querySelector(`.item[data-project-id="${expandedProjectId}"]`);
			if (project) {
				project.classList.add('clicked', 'expanded');
			}
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [expandedProjectId]);

	return (
		<div>
			<section id="projects">
				<div className="container">
					<div className="project-wrapper">
						<h2 className="section-title dark-blue-text section-title-project">Projects</h2>
						<div className="wrapper">
							<div className="items section-project load-hidden" id="project-items">
								{ProjectsData.map((project) => {
									const imagePath = require(`../../asset/img/${project.img}`);
									const isClicked = project.id === expandedProjectId;
									return (
										<div
											className={`item ${isClicked ? 'clicked' : ''} ${expandedProjectId && !isClicked ? 'opacity' : ''}`}
											key={project.id}
											onClick={() => handleProjectClick(project.id)}
											role="button"
											tabIndex="0"
											style={{ backgroundImage: `url(${imagePath})` }}
											aria-label={project.nom}
											data-project-id={project.id}
										>
											<div className="project-info" id="info">
												<p>language used : </p>
												<div className="language-icons">
													{(project.langages || []).map((lang, index) => (
														<FontAwesomeIcon key={index} icon={IconMap[lang]} />
													))}
												</div>
												<div className="link">
													<div className="link-spec">
														<span className="site">Site : </span>
														{project.website && (
															<a
																href={project.website}
																target="_blank"
																rel="noopener noreferrer"
																className="icons"
															>
																<FontAwesomeIcon icon={IconMap[project.iconSite]} />
															</a>
														)}
													</div>
													<div className="link-spec">
														<span className="site"> GitHub : </span>
														{project.website && (
															<a
																href={project.gitHubSite}
																target="_blank"
																rel="noopener noreferrer"
																className="icons"
															>
																<FontAwesomeIcon icon={IconMap[project.gitHub]} />
															</a>
														)}
													</div>
												</div>
											</div>
											<div className="project-info-left" id="info">
												<h1 className="titre-project">{project.nom}</h1>
												<p>{project.description}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
