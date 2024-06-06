import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import { Moon, Sun } from '../svgComponent/SvgComponent';

const ToggleModeButton = ({ onToggleMode }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const currentMode = localStorage.getItem('mode');
		if (currentMode === 'dark') {
			setDarkMode(true);
		}
	}, []);

	const handleToggleMode = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		onToggleMode(newMode);
		localStorage.setItem('mode', newMode ? 'dark' : 'light');
	};

	return (
		<div className="animated-button toggle-button">
			<Buttons id="toggle-button" SvgMoon={Moon} isToggle={true} onClick={handleToggleMode} />
		</div>
	);
};

export default ToggleModeButton;
