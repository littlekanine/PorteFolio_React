import React, { useState, useEffect } from 'react';
import ProjectsData from '../../asset/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
	html5: faHtml5,
	css3: faCss3Alt,
	SASS: faSass,
	MongoDB: faDatabase,
	js: faJs,
	react: faReact,
	globe: faGlobe,
	gitHub: faGithub,
};

function Projects() {
	const [expandedProjectId, setExpandedProjectId] = useState(null);

	const handleProjectClick = (projectId) => {
		setExpandedProjectId(projectId);
	};

	const handleClickOutside = (event) => {
		const project = document.querySelector(`.item.clicked`);
		if (project && !project.contains(event.target)) {
			project.classList.remove('clicked', 'expanded');
			setExpandedProjectId(null);
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
						<h2 className="section-title dark-blue-text">Projects</h2>
						<div className="wrapper">
							<div className="items" id="project-items">
								{ProjectsData.map((project) => {
									const imagePath = require(`../../asset/img/${project.img}`);
									return (
										<div
											className={`item ${project.id === expandedProjectId ? 'clicked' : ''}`}
											key={project.id}
											onClick={() => handleProjectClick(project.id)}
											role="button"
											tabIndex="0"
											style={{ backgroundImage: `url(${imagePath})` }}
											aria-label={project.nom}
											data-project-id={project.id}
										>
											<div className="project-info" id="info">
												<h1 className="titre-project">{project.nom}</h1>
												<p>language used : </p>
												<div className="language-icons">
													{(project.langages || []).map((lang, index) => (
														<FontAwesomeIcon key={index} icon={iconMap[lang]} />
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
																<FontAwesomeIcon icon={iconMap[project.iconSite]} />
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
																<FontAwesomeIcon icon={iconMap[project.gitHub]} />
															</a>
														)}
													</div>
												</div>
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
