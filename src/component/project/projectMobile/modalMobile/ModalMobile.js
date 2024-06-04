import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMap from '../../../iconMap/IconMap';

function Modal({ project, closeModal }) {
	const handleClose = () => {
		closeModal();
	};

	const imagePath = require(`../../../../asset/img/${project.img}`);

	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="title-modal">{project.nom}</h2>
						<div className="modal-close" onClick={handleClose}>
							<span className="modal-close-icon">X</span>
						</div>
					</div>
					<img src={imagePath} alt={project.nom} className="img-on-modal" />
					<h2 className="title-modal">Description</h2>
					<p>{project.description}</p>
					<h3 className="title-modal">Language used : </h3>
					<div className="language-icons">
						{(project.langages || []).map((lang, index) => (
							<FontAwesomeIcon key={index} icon={IconMap[lang]} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
