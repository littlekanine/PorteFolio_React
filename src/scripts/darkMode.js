document.addEventListener('DOMContentLoaded', (event) => {
	const toggleButton = document.getElementById('toggle-button');
	const currentMode = localStorage.getItem('mode');

	if (currentMode === 'dark') {
		document.body.classList.add('dark-mode');
		toggleButton.textContent = 'Mode Clair';
	} else {
		document.body.classList.remove('dark-mode');
		toggleButton.textContent = 'Mode Nuit';
	}

	toggleButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');

		if (document.body.classList.contains('dark-mode')) {
			toggleButton.textContent = 'Mode Clair';
			localStorage.setItem('mode', 'dark');
		} else {
			toggleButton.textContent = 'Mode Nuit';
			localStorage.setItem('mode', 'light');
		}
	});
});
