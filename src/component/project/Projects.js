import ProjectsData from '../../asset/projects.json';

function Projects() {
	return (
		<div>
			<section id="projects">
				<div className="container">
					<div className="project-wrapper">
						<h2 className="section-title dark-blue-text">Projects</h2>
						<div className="wrapper">
							<div className="items" id="project-items">
								{ProjectsData.map((project) => (
									<div className="item" key={project.id} tabIndex="0" style={{ backgroundImage: `url(${project.img})` }}></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
